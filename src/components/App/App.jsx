import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSigninClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignout = (e) => {
    // Update later
    e.preventDefault();
    setIsLoggedIn(false);
  };

  const handleSignin = (e) => {
    // Update Later
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleSigninClick={handleSigninClick}
          onLogout={handleSignout}
        />
        <Main />
        <About />
        <Footer />
      </div>
      <LoginModal
        activeModal={activeModal}
        isOpen={"sign-in"}
        onSubmit={handleSignin}
      />
    </div>
  );
}

export default App;
