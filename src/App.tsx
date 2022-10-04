import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage, VideocardsPage, NewMinersPage } from './components/pages';

function App() {
  // const {} = useAppSelector(state => state.userReducer)
  // const {increment} = userSlice.actions
  // const dispatch = useAppDispatch();
  return (
    <div className="app">
      <header className="app-header">
        <a href="/" className=""></a>
        <a href="/videocards" className="videocards"></a>
        <a href="/newminers" className="new-miners"></a>
        <a href="/oldminers" className="old-miners"></a>
      </header>
    </div>
  );
}

export default App;
