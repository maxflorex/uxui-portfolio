import { ProjectState } from "./project.state";
import { ProjectReducer } from "./projects.reducuers";
import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
    items: ProjectState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: ProjectReducer
}