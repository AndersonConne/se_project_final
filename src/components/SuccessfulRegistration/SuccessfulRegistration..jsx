import "./SuccessfulRegistration.css";
import "../ModalWithForm/ModalWithForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function SuccessfulRegistration({
  activeModal,
  isOpen,
  onClose,
  onRedirectButtonClick,
}) {
  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      activeModal={activeModal}
      redirectButtonText={{ prefix: "", action: "Sign In" }}
      title={"Registration successfully completed!"}
      noSubmitButton={true}
      onRedirectButtonClick={onRedirectButtonClick}
    ></ModalWithForm>
  );
}

export default SuccessfulRegistration;
