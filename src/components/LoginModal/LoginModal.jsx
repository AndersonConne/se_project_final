import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  activeModal,
  isOpen,
  onSubmit,
  onClose,
  onRedirectButtonClick,
}) {
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
        <input type="email" className="modal__input" />
      </label>
      <label className="modal__label">
        Password
        <input type="password" className="modal__input" />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
