import { createReducer, on } from '@ngrx/store';
import { loadURL, resetURL } from './url.actions';

export interface UrlState {
    url: string | null;
}

export const initialState: UrlState = {
    url: null
};

export const urlReducer = createReducer(
    initialState,
    on(loadURL, (state, { url }) => ({ ...state, url })),
    on(resetURL, () => initialState) 
);
