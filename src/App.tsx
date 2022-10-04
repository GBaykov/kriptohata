import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { Routes, Route } from 'react-router-dom';
import { HomePage, VideocardsPage, NewMinersPage } from './components/pages';
import Layout from './components/layout';

function App() {
  // const {} = useAppSelector(state => state.userReducer)
  // const {increment} = userSlice.actions
  // const dispatch = useAppDispatch();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="videocards" element={<VideocardsPage />} />
          <Route path="/newminers" element={<NewMinersPage />} />
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
