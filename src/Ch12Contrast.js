import React from 'react';
import './Ch12Contrast.css';

const Ch12Contrast = () => (
  <>
    <nav className="nav-container">
      <div className="nav-container__inner">
        <a className="home-link" href="/">Ink</a>
        <ul className="top-nav">
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/support">Support</a></li>
          <li className="top-nav__featured"><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>

    <div className="hero">
      <div className="hero__inner">
        <h2>Team collaboration done right</h2>
        <a href="/sign-up" className="button button--cta">Get started</a>
      </div>
    </div>

    <div className="container">
      <div className="tile-row">
        <div className="tile">
          <h4>Work together, even if you&apos;re apart</h4>
          <p>
            Organize your team conversations into threads. Collaborate
            together on documents in real-time. Use face-to-face
            {' '}
            <a
              href="/features/video-calling"
            >
              video calls
            </a>
            {' '}
            when typing just won&apos;t
            do.
          </p>
          <a href="/collaboration" className="button">Read more</a>
        </div>

        <div className="tile">
          <h4>Take it with you</h4>
          <p>
            Ink is available on a wide array of devices, so you can work from
            anywhere:
          </p>
          <ul className="tag-list">
            <li>Web</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Windows Phone</li>
          </ul>
          <a href="/supported-devices" className="button">Read more</a>
        </div>

        <div className="tile">
          <h4>Priced right</h4>
          <p>
            Whether you work on a team of three or a three hundred, you&apos;ll
            find our tiered pricing reasonable at every level.
          </p>
          <a href="/pricing" className="button">Read more</a>
        </div>
      </div>
    </div>

    <footer className="page-footer">
      <div className="page-footer__inner">
        Copyright &copy; 2017 Ink, Inc.
      </div>
    </footer>
  </>
);

export default Ch12Contrast;
