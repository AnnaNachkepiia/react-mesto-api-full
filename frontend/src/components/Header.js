import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import headerLogo from "../../src/images/logo.svg";

function Header({ onSignOut, email }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} />
      <Switch>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__nav-link">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__nav-link">
            Регистрация
          </Link>
        </Route>
        <Route exact path="/">
          <ul className="header__nav">
            <li className="header__nav-item">{email}</li>
            <li className="header__nav-item">
              <Link
                to="/sign-in"
                className="header__nav-link header__sign-out"
                onClick={onSignOut}
              >
                Выйти
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
