import store from './store';
import {
  userSlice,
  ingredientSlice,
  orderSlice,
  feedSlice,
  constructorSlice
} from '@slices';

describe('rootReducer test', () => {
  it('должен инициализировать все срезы в store', () => {
    const state = store.getState();

    expect(state).toHaveProperty(userSlice.name);
    expect(state).toHaveProperty(ingredientSlice.name);
    expect(state).toHaveProperty(orderSlice.name);
    expect(state).toHaveProperty(feedSlice.name);
    expect(state).toHaveProperty(constructorSlice.name);
  });
});
