import React from 'react';
import './spinner.css';

const Animation = () => (
  <section className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
);

const Spinner = ({ active, children }) => (
  <article className={active ? 'active' : ''}>
    {active && <Animation />}
    {children}
  </article>
);

export default Spinner;
