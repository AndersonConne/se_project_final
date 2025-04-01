import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSigninClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
  };

  const handleSignin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} handleSigninClick={handleSigninClick} />
        <Main />
        <About />
        <Footer />
      </div>
      <ModalWithForm activeModal={activeModal} />
    </div>
  );
}

export default App;
