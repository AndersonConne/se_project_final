import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  onClose,
  isOpen,
  activeModal,
  onRedirectButtonClick,
}) {
  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      activeModal={activeModal}
      onRedirectButtonClick={onRedirectButtonClick}
      redirectButtonText={{ prefix: "or ", action: "Sign In" }}
      buttonText={"Sign Up"}
      title={"Sign Up"}
    >
      <label className="modal__label">
        Email
        <input type="email" className="modal__input" />
      </label>
      <label className="modal__label">
        Password
        <input type="password" className="modal__input" />
      </label>
      <label className="modal__label">
        Username
        <input type="text" className="modal__input" />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
