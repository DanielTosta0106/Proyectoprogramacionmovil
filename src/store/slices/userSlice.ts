import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  name: string;
  email: string;
};

const initialState: UserState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setProfile: (state, action: PayloadAction<Pick<UserState, 'name' | 'email'>>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setEmail, setProfile } = userSlice.actions;
export default userSlice.reducer;
