import { createSlice } from "@reduxjs/toolkit";
// import { AppDispatch, AppThunk } from "../store";


const stock = createSlice({
  name: 'stock',
  initialState: {
    login: { email: '', password: ''},
    register: {
      fullName: '',
      email: '',
      address: '',
      number: '',
      complement: '',
      password: '',
      confirmPassword: '',
      proficional: ''
    }
  },
  reducers: {
    inputsLogin (state, action) {
      state.login = action.payload;
    },
    inputsRegister (state, action) {
      state.register = action.payload;
    }
  }
})

export const { inputsLogin, inputsRegister } = stock.actions;
export default stock.reducer;

// EXEMPLO DE FUNÇÂO E TIPAGEM ASINCRONA CO O REACT TOOLKIT

// export function asyncInput (): AppThunk {
//   return async function (dispatch: AppDispatch) {
//     await ------
//   }
// }