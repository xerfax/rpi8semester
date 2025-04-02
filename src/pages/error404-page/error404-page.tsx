import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "../../components/logo/logo";

function Error404Page(): JSX.Element {
  return (
    <div className="page page--gray page--404">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--404">
        <div className="container">
          <h1 className="error-title">404</h1>
          <p className="error-text">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <a className="button button--primary" href="index.html">
            Go to Home
          </a>
        </div>
      </main>
    </div>
  );
}
export default Error404Page;
