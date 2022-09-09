import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
  }

  return (
    <Auth
      email={email}
      password={password}
      title="Регистрация"
      buttonText="Зарегистрироваться"
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
    >
      <p className="auth-form__subtitle">
        Уже зарегистрированы?{" "}
        <Link to="/sign-in" className="auth-form__link">
          Войти
        </Link>
      </p>
    </Auth>
  );
}

export default Register;
