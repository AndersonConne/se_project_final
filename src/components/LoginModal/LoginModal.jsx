import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  activeModal,
  isOpen,
  handleSignin,
  onClose,
  onRedirectButtonClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSignin({ email, password });
  };
  return (
    <ModalWithForm
      activeModal={activeModal}
      isOpen={isOpen}
      title={"Sign In"}
      buttonText={"Sign In"}
      redirectButtonText={{ prefix: "or ", action: "Sign Up" }}
      onSubmit={onSubmit}
      onClose={onClose}
      onRedirectButtonClick={onRedirectButtonClick}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          autoComplete="current-email"
          name="email"
          id="login-email"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          autoComplete="current-password"
          name="password"
          id="login-password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
