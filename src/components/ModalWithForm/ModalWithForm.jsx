import "./ModalWithForm.css";
import close from "../../images/x.svg";
function ModalWithForm({
  children,
  title,
  buttonText,
  redirectButtonText,
  onSubmit,
  activeModal,
  isOpen,
}) {
  return (
    <div className={`modal ${activeModal === isOpen && "modal_open"} `}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__dismiss">
          <img className="modal__dismiss-img" src={close} alt={close}></img>
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <button className="modal__redirect-btn">
              {redirectButtonText.prefix}
              <span className="modal__redirect-btn_blue">
                {redirectButtonText.action}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
