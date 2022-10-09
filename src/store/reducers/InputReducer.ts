import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInputValue {
  input: string;
}

const initialState = {
  input: '',
};

export const InputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addInputvalue(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
  },
});
export default InputSlice.reducer;
