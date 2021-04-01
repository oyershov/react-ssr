import React, { FC, ReactElement } from 'react';
import logo from '../../assets/images/logo.svg';
import './index.scss';

export const LandingScreen: FC = (): ReactElement => {
  return (
    <div className="landing-screen">
      <header className="landing-screen__header">
        <img src={logo} className="landing-screen__header__logo" alt="logo" />
        <h1>React SSR example</h1>
      </header>
      <main className="landing-screen__content">
        <span>✨ Some magic content ✨</span>
      </main>
    </div>
  );
}
