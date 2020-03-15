import React from 'react';
import './Ch5.css';

const Ch5 = () => (
  <div className="body">
    <div className="container">
      <header>
        <h1>Ink</h1>
      </header>
      <nav>
        <ul className="site-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/support">Support</a></li>
          <li className="nav-right">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      <main className="flex">
        <div className="column-main tile">
          <h1>Team collaboration done right</h1>
          <p>
            Thousands of teams from all over the world turn to
            {' '}
            <b>Ink</b>
            {' '}
            to communicate and get things done.
          </p>
          <h1>Communication around the globe</h1>
          <p>
            Thousands of teams from all over the world turn to
            {' '}
            <b>Ink</b>
            {' '}
            to communicate and get things done.
          </p>
          <h1>Instant access to your team&apos;s documents</h1>
          <p>
            Thousands of teams from all over the world turn to
            {' '}
            <b>Ink</b>
            {' '}
            to communicate and get things done.
          </p>
          <h1>Intuitive interface</h1>
          <p>
            Thousands of teams from all over the world turn to
            {' '}
            <b>Ink</b>
            {' '}
            to communicate and get things done.
          </p>
        </div>
        <div className="column-sidebar">
          <div className="tile">
            <form className="login-form">
              <h3>Login</h3>
              <p>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                />
              </p>
              <p>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                />
              </p>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="tile centered">
            <small>Starting at</small>
            <div className="cost">
              <span className="cost-currency">$</span>
              <span className="cost-dollars">20</span>
              <span className="cost-cents">.00</span>
            </div>
            <a className="cta-button" href="/pricing">
            Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Ch5;
