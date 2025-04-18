import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./App.css";
import {
  SearchContextProvider,
  SearchContext,
} from "../../Context/SearchContext";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import getNewsArticles, {
  getSavedArticles,
  removeArticle,
  saveArticle,
} from "../../utils/api";
import { login, register } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentSearchKeyword, setCurrentSearchKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSigninClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignupClick = () => {
    setActiveModal("sign-up");
  };

  const handleSignout = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username"); // Add this line
    setCurrentUser("");
    setIsLoggedIn(false);
    navigate("/");
    setCurrentPage("home");
  };
  const handleSignin = (values) => {
    login(values)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("currentUser", res.token);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", res.user.name);
          setCurrentUser(res.user.name);
          setIsLoggedIn(true);
          closeActiveModal();
        } else {
          console.log("Invalid response:", res);
        }
      })
      .catch((err) => {
        console.log("Login error:", err);
      });
  };
  const savedNewsNavigation = () => {
    navigate("/saved-news");
    setCurrentPage("saved-news");
  };

  const homeNavigation = () => {
    navigate("/");
    setCurrentPage("home");
  };

  const handleSavedArticles = (articleData) => {
    saveArticle({
      source: articleData.source,
      title: articleData.title,
      publishedAt: articleData.publishedAt,
      description: articleData.description,
      urlToImage: articleData.urlToImage,
      url: articleData.url,
      keyword: currentSearchKeyword,
    })
      .then((newArticle) => {
        if (newArticle) {
          setSavedArticles((prevArticles) => [...prevArticles, newArticle]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShowMoreButton = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = (values) => {
    setIsLoading(true);
    setError(null);
    getNewsArticles(values)
      .then((data) => {
        console.log("API Response Data: ", data);
        setSearchResults(data.articles);
        setIsLoading(false);
        setIsSearched(true);
        setCurrentSearchKeyword(values);
      })
      .catch((err) => {
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
        setIsLoading(false);
      });
  };

  const handleRegister = (values) => {
    return register(values)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteArticle = (articleId) => {
    console.log("handleDeleteArticle called with:", articleId);
    removeArticle(articleId)
      .then((res) => {
        setSavedArticles(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closeActiveModal]);

  useEffect(() => {
    getSavedArticles()
      .then((articles) => {
        console.log("Articles fetched:", articles);
        setSavedArticles(articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  useEffect(() => {
    const token = localStorage.getItem("currentUser");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUsername = localStorage.getItem("username");
    if (token && loggedIn) {
      setIsLoggedIn(true);
      setCurrentUser(savedUsername);
    }
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SearchContextProvider>
        <div className="page">
          <div className="page__content">
            <Header
              isLoggedIn={isLoggedIn}
              handleSigninClick={handleSigninClick}
              onLogout={handleSignout}
              onSaveArticlesClick={savedNewsNavigation}
              onHomeClick={homeNavigation}
              isOverlay={location.pathname === "/"}
              currentPage={currentPage}
              onMenuClick={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              activeModal={activeModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main
                      onSubmit={handleSearchSubmit}
                      searchResults={searchResults}
                      isLoading={isLoading}
                      error={error}
                      isSearched={isSearched}
                      visibleCards={visibleCards}
                      setVisibleCards={setVisibleCards}
                      onShowMoreClick={handleShowMoreButton}
                      savedArticles={savedArticles}
                      handleSavedArticles={handleSavedArticles}
                      isLoggedIn={isLoggedIn}
                    />
                    <About />
                  </>
                }
              ></Route>
              <Route
                path="/saved-news"
                element={
                  <SavedNews
                    savedArticles={savedArticles}
                    handleSavedArticles={handleSavedArticles}
                    isLoggedIn={isLoggedIn}
                    handleDeleteArticle={handleDeleteArticle}
                    currentSearchKeyword={currentSearchKeyword}
                  />
                }
              ></Route>
            </Routes>
            <Footer />
          </div>
          <LoginModal
            activeModal={activeModal}
            isOpen={"sign-in"}
            handleSignin={handleSignin}
            onClose={closeActiveModal}
            onRedirectButtonClick={handleSignupClick}
          />
          <RegisterModal
            activeModal={activeModal}
            isOpen={"sign-up"}
            onClose={closeActiveModal}
            onRedirectButtonClick={handleSigninClick}
            handleRegister={handleRegister}
          />
        </div>
      </SearchContextProvider>
    </CurrentUserContext.Provider>
  );
}

export default App;
