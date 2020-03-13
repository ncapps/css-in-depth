import React from 'react';
import './Ch3.css';

const Ch3 = () => (
  <div className="body">
    <header>
      <h1>Franklin Running Club</h1>
    </header>
    <div className="container">
      <main className="main">
        <h2>Come join us!</h2>
        <p>
        The Franklin Running club meets at 6:00pm every Thursday
        at the town square. Runs are three to five miles, at your
        own pace.
        </p>
      </main>
      <aside className="sidebar">
        <a href="/twitter" className="button-link">
          follow us on Twitter
        </a>
        <a href="/facebook" className="button-link">
          like us on Facebook
        </a>
        <a href="/sponsors" className="sponsor-link">
          become a sponsor
        </a>
      </aside>
    </div>
  </div>
);

export default Ch3;
