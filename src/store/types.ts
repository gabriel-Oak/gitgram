import { CombinedState, Store } from 'redux';
import { AuthState } from '../components/auth/reducer';

export interface ActionType {
  type: string;
  payload?: any;
  error?: Error;
}

export type StoreState = CombinedState<{
  auth: AuthState;
}>;

export type StoreData = Store<StoreState, ActionType>;

export interface StoreType extends StoreData { }

export type GetState = () => StoreState;
