import { createSlice } from "@reduxjs/toolkit";
// import { AppDispatch, AppThunk } from "../store";
import { AppDispatch } from "../store";


const stock = createSlice({
  name: 'stock',
  initialState: {
    login: { email: '', password: ''},
  },
  reducers: {
    inputsLogin (state, action) {
      state.login = action.payload;
    },
  }
})

export const { inputsLogin } = stock.actions;
export default stock.reducer;

// EXEMPLO DE FUNÇÂO E TIPAGEM ASINCRONA CO O REACT TOOLKIT

// export function asyncInput (): AppThunk {
//   return async function (dispatch: AppDispatch) {
//     await ------
//   }
// }