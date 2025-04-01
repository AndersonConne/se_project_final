import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  redirectButtonText,
  onSubmit,
}) {
  return (
    <div className="modal modal_open">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__dismiss"></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
        <div className="modal__button-container">
          <button className="modal__submit">{buttonText}</button>
          <button className="modal__redirect-btn">{redirectButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
