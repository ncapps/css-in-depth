import React, { useState } from 'react';
import './Ch14Transitions.css';

const Ch14Transitions = () => {
  const [isDropdownOpen, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!isDropdownOpen);

  return (
    <>
      <button className="button" type="button">Hover over me</button>
      <div className="container">
        <div className="box" />
      </div>
      <div className={`dropdown ${isDropdownOpen ? 'is-open' : ''}`} aria-haspopup="true">
        <button
          type="button"
          className="dropdown__toggle"
          onClick={toggleDropdown}
        >
          Menu
        </button>
        <div className="dropdown__drawer">
          <ul className="menu" role="menu">
            <li role="menuitem">
              <a href="/features">Features</a>
            </li>
            <li role="menuitem">
              <a href="/pricing">Pricing</a>
            </li>
            <li role="menuitem">
              <a href="/support">Support</a>
            </li>
            <li role="menuitem">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <p><a href="/read-more">Read more</a></p>
    </>
  );
};

export default Ch14Transitions;
