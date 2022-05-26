import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers_actions'

const store = configureStore({
  reducer: rootReducer,
})

export default store;
