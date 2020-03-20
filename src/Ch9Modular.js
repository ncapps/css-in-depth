import React, { useState } from 'react';
import { FaRunning } from 'react-icons/fa';
import './Ch9Modular.css';

const Ch9Modular = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!isMenuOpen);

  return (
    <>
      <div className="message">
        Save successful
      </div>
      <div className="message message--error">
        Invalid password
      </div>

      <button type="button" className="button button--large">Read more</button>
      <button type="button" className="button button--success">Save</button>
      <button type="button" className="button button--danger button--small">Cancel</button>

      <div className="media">
        <FaRunning className="media__image" />
        <div className="media__body">
          <h4>Strength</h4>
          <p>
            Strength training is an important part of
            injury prevention. Focus on your core&mdash;
            especially your abs and glutes.
          </p>
        </div>
      </div>

      <div className={`dropdown ${isMenuOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="dropdown__toggle"
          onClick={toggleMenu}
        >
          Main Menu
        </button>
        <div className="dropdown__drawer">
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/coffees">Coffees</a></li>
            <li><a href="/brewers">Brewers</a></li>
            <li><a href="/specials">Specials</a></li>
            <li><a href="/about">About us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ch9Modular;
