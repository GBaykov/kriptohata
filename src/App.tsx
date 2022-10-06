import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  VideocardsPage,
  NewMinersPage,
  OldMinersPage,
  HowOrderPage,
} from './components/pages';
import Layout from './components/layout';
import { NotfoundPage } from './components/pages/NotfoundPage';
import { InputSlice } from './store/reducers/InputReducer';

function App() {
  const { input } = useAppSelector((state) => state.InputReducer);
  // const { addInputvalue } = InputSlice.actions;
  // const dispatch = useAppDispatch();
  console.log('input from App component', input);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="" element={<HomePage />} />
          <Route path="videocards" element={<VideocardsPage />} />
          <Route path="newminers" element={<NewMinersPage />} />
          <Route path="oldminers" element={<OldMinersPage />} />
          <Route path="howorder" element={<HowOrderPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
