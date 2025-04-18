import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  onClose,
  isOpen,
  activeModal,
  onRedirectButtonClick,
  handleRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ email, password, name });
  };

  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      activeModal={activeModal}
      onRedirectButtonClick={onRedirectButtonClick}
      redirectButtonText={{ prefix: "or ", action: "Sign In" }}
      buttonText={"Sign Up"}
      title={"Sign Up"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="register-email"
          name="email"
          placeholder="Enter email"
          required
          onChange={handleEmailChange}
          autoComplete="email"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="current-password"
          placeholder="Password"
          name="current-password"
          minLength="3"
          required
          onChange={handlePasswordChange}
          autoComplete="new-password"
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
          autoComplete="username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
