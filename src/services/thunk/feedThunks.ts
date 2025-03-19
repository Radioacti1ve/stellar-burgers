import {
  getIngredientsApi,
  getFeedsApi,
  getOrderByNumberApi,
  getOrdersApi,
  orderBurgerApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FEED_SLICE_NAME } from '../slices/sliceNames';

export const getIngredients = createAsyncThunk(
  `${FEED_SLICE_NAME}/getIngredients`,
  async () => await getIngredientsApi()
);

export const getFeed = createAsyncThunk(
  `${FEED_SLICE_NAME}/getFeed`,
  async () => await getFeedsApi()
);

export const getOrderByNumber = createAsyncThunk(
  `${FEED_SLICE_NAME}/getOrderByNumber`,
  async (number: number) => await getOrderByNumberApi(number)
);

export const getOrders = createAsyncThunk(
  `${FEED_SLICE_NAME}/getOrders`,
  async () => await getOrdersApi()
);

export const orderBurger = createAsyncThunk(
  `${FEED_SLICE_NAME}/getOrders`,
  async (data: string[]) => await orderBurgerApi(data)
);
