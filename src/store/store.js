// store without redux-tolkit.
import reducer from './reducer';
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

function load() {
  let state;
  try {
      state = localStorage.getItem('admin_state');

      if (typeof state === 'string') {
          state = JSON.parse(state);
      }
  } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
  }

  return state || undefined;
}

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer,load(),composeEnhancers(applyMiddleware(thunk)));

function save() {
  try {
      localStorage.setItem('admin_state', JSON.stringify(store.getState()));
  } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
  }
}

store.subscribe(() => save());
/*
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
*/
