import React from 'react';
import { Link } from 'react-router-dom';

export const NotfoundPage = () => {
  return (
    <main className="main notfound">
      This page does not exist <Link to="/"> Home</Link>
    </main>
  );
};
