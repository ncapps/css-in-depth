import React from 'react';
import './Ch2.css';

const Ch2 = () => (
  <>
    <div className="padded">
      {`We have built partnerships with small farms around the world 
    to hand-select beans at the peak of season. We then carefully 
    roast in small batches to maximize their potential.`}
    </div>
    <br />
    <span className="box box-small">Small</span>
    <span className="box box-large">Large</span>
    <br />
    <div className="body">
      We love coffee
      <p className="slogan">We love coffee</p>
    </div>
    <br />
    <div className="panel large">
      <h2>Single-origin</h2>
      <div className="panel-body">
        We have built partnerships with small farms around the world
        to hand-select beans at the peak of season. We then carefully
        roast in
        {' '}
        <a href="/batch-size">small batches</a>
        {' '}
        to maximize their
        potential.
      </div>
    </div>
    <br />
    {/* <div className="square" /> */}
    <br />
    <div className="unitless">
      <p className="about-us">
        We have built partnerships with small farms around the world to
        hand-select beans at the peak of season. We then carefully roast in
        small batches to maximize their potential.
      </p>
    </div>
    <br />
    <div className="panel">
      <h2>Single-origin</h2>
      <div className="body">
      We have built partnerships with small farms
      around the world to hand-select beans at the
      peak of season. We then careful roast in
      small batches to maximize their potential.
      </div>
    </div>

    <aside className="dark">
      <div className="panel">
        <h2>Single-origin</h2>
        <div className="body">
        We have built partnerships with small farms
        around the world to hand-select beans at the
        peak of season. We then careful roast in
        small batches to maximize their potential.
        </div>
      </div>
    </aside>
  </>
);

export default Ch2;
