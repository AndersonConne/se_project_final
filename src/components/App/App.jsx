import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Navigate = useNavigate();
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
    // Update later
    e.preventDefault();
    Navigate("/");
    setCurrentPage("home");
    setIsLoggedIn(false);
  };

  const handleSignin = (e) => {
    // Update Later
    e.preventDefault();
    closeActiveModal();
    setIsLoggedIn(true);
  };

  const savedNewsNavigation = () => {
    Navigate("/saved-news");
    setCurrentPage("saved-news");
  };

  const homeNavigation = () => {
    Navigate("/");
    setCurrentPage("home");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  return (
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
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
              </>
            }
          ></Route>
          <Route path="/saved-news" element={<SavedNews />}></Route>
        </Routes>
        <Footer />
      </div>
      <LoginModal
        activeModal={activeModal}
        isOpen={"sign-in"}
        onSubmit={handleSignin}
        onClose={closeActiveModal}
        onRedirectButtonClick={handleSignupClick}
      />
      <RegisterModal
        activeModal={activeModal}
        isOpen={"sign-up"}
        onSubmit={handleSignin}
        onClose={closeActiveModal}
        onRedirectButtonClick={handleSigninClick}
      />
    </div>
  );
}

export default App;
