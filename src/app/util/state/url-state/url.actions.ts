import { createAction, props } from '@ngrx/store';

export const loadURL = createAction(
    '[URL] Load URL',
    props<{ url: string }>()
);

export const resetURL = createAction('[URL] Reset URL');