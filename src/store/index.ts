import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { StoreType, StoreState } from './types';

let store: StoreType | undefined;

const initStore = (initialState: StoreState) => createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export const initializeStore = (preloadedState: StoreState) => {
  let _store = store ?? initStore(preloadedState) as unknown as StoreType;

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    }) as unknown as StoreType
    store = undefined
  }

  if (process.browser) return _store
  if (!store) store = _store

  return _store
}

export const useStore = (initialState: StoreState) => useMemo(
  () => initializeStore(initialState), 
  [initialState]
);
