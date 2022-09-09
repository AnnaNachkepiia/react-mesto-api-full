import React from "react";
import Auth from "./Auth";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
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
    onLogin({ email, password });
  }

  return (
    <Auth
      title="Вход"
      buttonText="Войти"
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
    >
      <p className="auth-form__subtitle">
        Не зарегистрированы?{" "}
        <Link to="/sign-up" className="auth-form__link">
          Регистрация
        </Link>
      </p>
    </Auth>
  );
}
export default Login;
