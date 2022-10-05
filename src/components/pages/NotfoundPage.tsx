import React from 'react';
import { Link } from 'react-router-dom';

export const NotfoundPage = () => {
  return (
    <section className="notfound">
      This page does not exist <Link to="/"> Home</Link>
    </section>
  );
};
