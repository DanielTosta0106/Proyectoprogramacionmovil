import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  email: string;
};

const initialState: UserState = {
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = userSlice.actions;
export default userSlice.reducer;
