import { createStore } from 'redux';
import { reducer } from './reducer';

export type State = {
    currentRepo?: string
}

export const store = createStore(reducer)
