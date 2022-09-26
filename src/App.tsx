import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  // const {} = useAppSelector(state => state.userReducer)
  // const {increment} = userSlice.actions
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
