import React from 'react';
import './Ch15Transforms.css';

const Ch15Transforms = () => (
  <>
    <header>
      <h1 className="page-header">The Yolk Factory</h1>
    </header>
    <nav className="main-nav">
      <ul className="nav-links">
        <li>
          <a href="/">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/homeassistant.svg" className="nav-links__icon" />
            <span className="nav-links__label">Home</span>
          </a>
        </li>
        <li>
          <a href="/events">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecalendar.svg" className="nav-links__icon" />
            <span className="nav-links__label">Events</span>
          </a>
        </li>
        <li>
          <a href="/members">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/superuser.svg" className="nav-links__icon" />
            <span className="nav-links__label">Members</span>
          </a>
        </li>
        <li>
          <a href="/about">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stellar.svg" className="nav-links__icon" />
            <span className="nav-links__label">About</span>
          </a>
        </li>
      </ul>
    </nav>
  </>
  // <div className="card">
  //   <img src="https://images.unsplash.com/photo-1471623817296-aa07ae5c9f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" alt="a chicken" />
  //   <h4>Mrs. Featherstone</h4>
  //   <p>
  //     She may be a bit frumpy, but Mrs Featherstone gets the job done. She
  //     lays her largish cream-colored eggs on a daily basis. She is gregarious
  //     to a fault.
  //   </p>
  //   <p>This Austra White is our most prolific producer.</p>
  // </div>
);

export default Ch15Transforms;
