import React from 'react';
import { GiRunningShoe } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';
import './Ch4.css';

const Ch4 = () => (
  <div className="body">
    <div className="container">
      <header>
        <h1>Franklin Running Club</h1>
      </header>

      <main className="main clearfix">
        <h2>Running tips</h2>

        <div className="row">
          <div className="column-6">
            <div className="media">
              <FaRunning className="media-image" />
              <div className="media-body">
                <h4>Strength</h4>
                <p>
              Strength training is an important part of
              injury prevention. Focus on your core&mdash;
              especially your abs and glutes.
                </p>
              </div>
            </div>
          </div>

          <div className="column-6">
            <div className="media">
              <GiRunningShoe className="media-image" />
              <div className="media-body">
                <h4>Cadence</h4>
                <p>
              Check your stride turnover. The most efficient
              runners take about 180 steps per minute.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column-6">
            <div className="media">
              <GiRunningShoe className="media-image" />
              <div className="media-body">
                <h4>Change it up</h4>
                <p>
              Don&apos;t run the same every time you hit the
              road. Vary your pace, and vary the distance
              of your runs.
                </p>
              </div>
            </div>
          </div>

          <div className="column-6">
            <div className="media">
              <FaRunning className="media-image" />
              <div className="media-body">
                <h4>Focus on form</h4>
                <p>
              Run tall but relaxed. Your feet should hit
              the ground beneath your hips, not out in
              front of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Ch4;
