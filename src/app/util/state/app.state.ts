
import { ActionReducerMap } from '@ngrx/store'
import { ProjectState } from './project-state/project.state'
import { ProjectReducer } from './project-state/projects.reducers'

export interface AppState {
    projectsList: ProjectState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    projectsList: ProjectReducer
}