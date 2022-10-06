import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/UserSlice';
import InputReducer from './reducers/InputReducer';

export const rootReducer = combineReducers({
  userReducer,
  InputReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
