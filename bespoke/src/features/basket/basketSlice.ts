import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Basket } from '../../app/models/basket';
import agent from '../../app/api/productAgent';
import { getCookie } from '../../app/utils/utils';

export interface BasketState {
  basket: Basket | null;
  status: string;
}

const initialState: BasketState = {
  basket: null,
  status: 'idle',
};

export const fetchBasketAsync = createAsyncThunk<Basket>(
  'basket/fetchBasketAsync',
  async (_, thunkAPI) => {
    try {
      return await agent.Basket.get();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  },
  {
    condition: () => {
      if (getCookie('buyerId')) return false;
    },
  }
);

export const addBasketItemAsync = createAsyncThunk<
  Basket,
  { productId: number; quantity?: number }
>(
  'basket/addBasketItemAsync',
  async ({ productId, quantity = 1 }, thunkAPI) => {
    try {
      return await agent.Basket.addItem(productId, quantity);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const removeBasketItemAsync = createAsyncThunk<
  void,
  { productId: number; quantity: number; name?: string }
>('basket/removeBasketItemAsync', async ({ productId, quantity }, thunkAPI) => {
  try {
    await agent.Basket.removeItem(productId, quantity);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    removeItem: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.basket?.items.findIndex(
        (i) => i.productId === productId
      );
      if (itemIndex === -1 || itemIndex === undefined) return;

      state.basket!.items[itemIndex].quantity -= quantity;
      if (state.basket?.items[itemIndex].quantity === 0)
        state.basket.items.splice(itemIndex, 1);
    },
  },
});

export const { setBasket, removeItem } = basketSlice.actions;
