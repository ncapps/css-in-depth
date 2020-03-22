import React from 'react';
import './Ch11Backgrounds.css';

const Ch11Backgrounds = () => (
  <>
    <div className="fade" />
    <div className="striped-bar" />
    <button type="button" className="button">Sign up now</button>
    <button type="button" className="button button--flat">Sign up now</button>
    <button type="button" className="button button--hybrid">Sign up now</button>
    <div className="blend" />
    <div className="blend blend--tint" />
    <div className="blend blend--texture" />
    <div className="blend blend--heading">
      <h1>Ursa Major</h1>
    </div>
  </>
);

export default Ch11Backgrounds;
