import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import rootReducer from '../reducers_actions'

const store = configureStore({
  reducer: {
    stock: rootReducer,
  } 
})

console.log('oiiii', store.getState());


export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;
