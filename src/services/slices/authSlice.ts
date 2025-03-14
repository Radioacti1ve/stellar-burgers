import { TUser } from './../../utils/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  logoutApi,
  getUserApi,
  updateUserApi,
  forgotPasswordApi,
  resetPasswordApi,
  TRegisterData,
  TLoginData
} from '@api';

const auth = 'auth';

export const registerUser = createAsyncThunk(
  `${auth}/registerUser`,
  async (userData: TRegisterData) => {
    const response = await registerUserApi(userData);
    return response;
  }
);

export const loginUser = createAsyncThunk(
  `${auth}/loginUser`,
  async (userData: TLoginData) => {
    const response = await loginUserApi(userData);
    return response;
  }
);

export const logoutUser = createAsyncThunk(`${auth}/logoutUser`, async () => {
  const respons = await logoutApi();
  return respons;
});

export const getUser = createAsyncThunk(`${auth}/getUser`, async () => {
  const response = await getUserApi();
  return response;
});

export const updateUser = createAsyncThunk(
  `${auth}/updateUser`,
  async (userData: Partial<TRegisterData>) => {
    const response = await updateUserApi(userData);
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  `${auth}/forgotPassword`,
  async (data: { email: string }) => {
    const response = forgotPasswordApi(data);
    return response;
  }
);

export const resetPassword = createAsyncThunk(
  `${auth}/resetPassword`,
  async (data: { password: string; token: string }) => {
    const response = resetPasswordApi(data);
    return response;
  }
);

type AuthInitialState = {
  user: TUser | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: AuthInitialState = {
  user: null,
  status: 'idle',
  error: undefined
};

export const authSlice = createSlice({
  name: `${auth}`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default authSlice.reducer;
