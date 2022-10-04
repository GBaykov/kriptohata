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
        <Link to="/" className=""></Link>
        <Link to="/videocards" className="videocards"></Link>
        <Link to="/newminers" className="new-miners"></Link>
        <Link to="/oldminers" className="old-miners"></Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videocards" element={<VideocardsPage />} />
        <Route path="/newminers" element={<NewMinersPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
