import React from 'react';

const Header = () => (
  <header className="Header">
    <h1>Este es el header</h1>

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/notes">Notes</a></li>
      <li><a href="/coins">Coins</a></li>
      <li><a href="/somethingfake">Error 404</a></li>
    </ul>
  </header>
);

export default Header;
