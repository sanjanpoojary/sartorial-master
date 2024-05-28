import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { User } from '../../app/models/user';
import { FieldValues } from 'react-hook-form';
import agent from '../../app/api/authAgent';
import { router } from '../../app/router/Routes';
import { toast } from 'react-toastify';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const signInUser = createAsyncThunk<User, FieldValues>(
  'auth/signInUser',
  async (data, thunkAPI) => {
    // console.log(data);
    try {
      const user = await agent.Account.login(data);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<User>(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)));
    try {
      const userDto = await agent.Account.currentUser();
      const { ...user } = userDto;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  },
  {
    condition: () => {
      if (!localStorage.getItem('user')) return false;
    },
  }
);

export const authSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      router.navigate('/');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.error('Session expired! Please sign in again');
      router.navigate('/');
    });
    builder.addMatcher(
      isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled),
      (state, action) => {
        state.user = action.payload;
      }
    );
    builder.addMatcher(isAnyOf(signInUser.rejected), (_state, action) => {
      console.log(action.payload);
    });
  },
});

export const { signOut, setUser } = authSlice.actions;
