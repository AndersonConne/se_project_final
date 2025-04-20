import "./SuccessfulRegistration.css";
import close from "../../images/x.svg";
function SuccessfulRegistration({
  activeModal,
  isOpen,
  onClose,
  handleSigninClick,
}) {
  return (
    <div
      className={`successful-registration ${
        activeModal === isOpen && "successful-registration_open"
      }`}
    >
      <div className="successful-registration__content">
        <p className="successful-registration__title">
          Registration successfully completed!
        </p>
        <button
          className="successful-registration__dismiss"
          type="button"
          onClick={onClose}
        >
          <img
            className="successful-registration__dismiss-img"
            src={close}
            alt={close}
          ></img>
        </button>
        <button
          className="successful-registration__btn"
          onClick={handleSigninClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SuccessfulRegistration;
