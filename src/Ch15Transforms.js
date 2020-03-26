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
            <img src="home.svg" className="nav-links__icon" alt="home" />
            <span className="nav-links__label">Home</span>
          </a>
        </li>
        <li>
          <a href="/events">
            <img src="calendar.svg" className="nav-links__icon" alt="events" />
            <span className="nav-links__label">Events</span>
          </a>
        </li>
        <li>
          <a href="/members">
            <img src="members.svg" className="nav-links__icon" alt="members" />
            <span className="nav-links__label">Members</span>
          </a>
        </li>
        <li>
          <a href="/about">
            <img src="star.svg" className="nav-links__icon" alt="about" />
            <span className="nav-links__label">About</span>
          </a>
        </li>
      </ul>
    </nav>

    <main className="flyin-grid">
      <div className="flyin-grid__item card">
        <img src="chicken1.jpg" alt="a chicken" />
        <h4>Mrs. Featherstone</h4>
        <p>
          She may be a bit frumpy, but Mrs Featherstone gets
          the job done. She lays her largish cream-colored
          eggs on a daily basis. She is gregarious to a fault.
        </p>
        <p>This Austra White is our most prolific producer.</p>
      </div>
      <div className="flyin-grid__item card">
        <img src="chicken2.jpg" alt="a chicken" />
        <h4>Hen Solo</h4>
        <p>
          Though the most recent addition to our flock, Hen
          Solo is a fast favorite among our laying brood. She
          is a sassy and suspicious hen; we frequently have to
          follow her to find where she has hidden her loot from
          the other hens.
        </p>
        <p>
          This Snowy Easter Egger lays in delicate shades of
          blue and green. A full dozen of her eggs costs an
          additional $2.

        </p>
      </div>
      <div className="flyin-grid__item card">
        <img src="chicken3.jpg" alt="a chicken" />
        <h4>Cluck Norris</h4>
        <p>
          Every brood has its brawler. Cluck Norris is our
          feistiest hen, frequently picking fights with other
          hens about laying territory and foraging space. Her
          sister hens continue to hope that she will follow the
          steps of her namesake (eventually) and focus the her
          strength of will for good.
        </p>
        <p>
          This Buff Chantecler is as robust and hardy as her
          Canadian forebears, laying through the coldest parts
          of the winter.

        </p>
      </div>
      <div className="flyin-grid__item card">
        <img src="chicken4.jpg" alt="a chicken" />
        <h4>Peggy Schuyler</h4>
        <p>
          Peggy was our first and friendliest hen. She is the
          most likely to greet visitors to the yard, and
          frequently to be found nesting in the coop. Though
          not a prolific layer, her output is consistent and
          regular. You will regularly find her eggs among your
          dozen.
        </p>
        <p>This Lavender Orpington lays light brown eggs.</p>
      </div>
    </main>
  </>
);

export default Ch15Transforms;
