import React from "react";

function Auth({
  email,
  password,
  title,
  buttonText,
  children,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}) {
  return (
    <form className="auth-form__container" onSubmit={handleSubmit}>
      <h3 className="auth-form__title">{title}</h3>
      <input
        name="email"
        id="user-email"
        type="email"
        className="auth-form__input auth-form__input_type_email"
        placeholder="Email"
        minLength={2}
        maxLength={30}
        required
        onChange={handleEmailChange}
      />

      <input
        name="password"
        id="password"
        type="password"
        className="auth-form__input auth-form__input_type_password"
        placeholder="Пароль"
        minLength={2}
        maxLength={30}
        required
        onChange={handlePasswordChange}
      />
      <button className="auth-form__submit-button" type="submit">
        {buttonText}
      </button>
      {children}
    </form>
  );
}

export default Auth;
