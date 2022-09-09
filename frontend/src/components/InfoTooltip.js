import React from "react";
import Success from "../images/Success.svg";
import Error from "../images/Error.svg";

function InfoTooltip({ isOpen, onClose, onRegisterSuccess, registerInfo }) {
  return (
    <section
      className={`popup popup_type_register ${isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container">
        <div className="register">
          <img
            className="register__icon"
            src={onRegisterSuccess ? Success : Error}
            alt={onRegisterSuccess ? "Успешно!" : "Что-то пошло не так"}
          />
          <p className="register__description">{registerInfo}</p>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_popup-register"
        />
      </div>
    </section>
  );
}

export default InfoTooltip;
