import "./ModalWithForm.css";
import close from "../../images/x.svg";
import { useRef } from "react";
function ModalWithForm({
  children,
  title,
  buttonText,
  redirectButtonText,
  onSubmit,
  activeModal,
  isOpen,
  onClose,
  onRedirectButtonClick,
}) {
  const modalContentRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      onClose();
    }
  };
  return (
    <div
      className={`modal ${activeModal === isOpen && "modal_open"} `}
      onClick={handleOverlayClick}
    >
      <div className="modal__content" ref={modalContentRef}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal__dismiss" onClick={onClose} type="button">
          <img className="modal__dismiss-img" src={close} alt={close}></img>
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
          </div>
        </form>
        <button className="modal__redirect-btn">
          {redirectButtonText.prefix}
          <span
            className="modal__redirect-btn-blue"
            onClick={onRedirectButtonClick}
          >
            {redirectButtonText.action}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
