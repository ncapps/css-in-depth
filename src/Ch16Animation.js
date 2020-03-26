import React, { useState } from 'react';
import './Ch16Animation.css';

const Ch16Animation = () => {
  const [isLoading, setLoading] = useState(false);
  const [isShaking, setShaking] = useState(false);
  let timeout = null;

  const toggleLoader = (e) => {
    e.preventDefault();
    setLoading(!isLoading);
  };

  function addShake() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setShaking(true);
    }, 1000);
  }

  const removeShake = () => setShaking(false);

  return (
    <>
      <div className="box" />
      <form>
        <label htmlFor="trip">Tell us about your first trip to the zoo:</label>
        <textarea
          id="trip"
          name="about-my-trip"
          rows="5"
          onKeyUp={addShake}
        />
        <button
          type="submit"
          id="submit-button"
          onClick={toggleLoader}
          onAnimationEnd={removeShake}
          className={`${isLoading ? 'is-loading' : ''} ${isShaking ? 'shake' : ''}`}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default Ch16Animation;
