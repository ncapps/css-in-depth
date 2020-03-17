import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Ch7Modal.css';

const Modal = ({ onClose = (f) => f }) => (
  <div className="modal" id="modal">
    <div className="modal-backdrop" />
    <div className="modal-body">
      <button
        type="button"
        onClick={onClose}
        className="modal-close"
        id="close"
      >
        close
      </button>
      <h2>Wombat Newsletter</h2>
      <p>
        Sign up for our monthly newsletter. No spam. We promise!
      </p>
      <form>
        <p>
          <label>
            Email address:
            <input type="text" />
          </label>
        </p>
        <p><button type="submit">Submit</button></p>
      </form>
    </div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function Ch7Modal() {
  const [isModalOpen, setModal] = useState(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  return (
    <>
      <header className="top-banner">
        <div className="top-banner-inner">
          <p>
            Find out what&apos;s going on at Wombat Coffee each
            month. Sign up for our newsletter:
            <button type="button" onClick={openModal} id="open">Sign up</button>
          </p>
        </div>
      </header>
      {isModalOpen ? <Modal onClose={closeModal} /> : ''}
      <div className="container">
        <main className="col-main">
          <nav>
            <div className="dropdown">
              <div className="dropdown-label">Main Menu</div>
              <div className="dropdown-menu">
                <ul className="submenu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/coffees">Coffees</a></li>
                  <li><a href="/brewers">Brewers</a></li>
                  <li><a href="/specials">Specials</a></li>
                  <li><a href="/about">About us</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <h1>Wombat Coffee Roasters</h1>
        </main>

        <aside className="col-sidebar">
          <div className="affix">
            <ul className="submenu">
              <li><a href="/">Home</a></li>
              <li><a href="/coffees">Coffees</a></li>
              <li><a href="/brewers">Brewers</a></li>
              <li><a href="/specials">Specials</a></li>
              <li><a href="/about">About us</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
