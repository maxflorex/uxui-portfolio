
import { ActionReducerMap } from '@ngrx/store'
import { ProjectState } from './project-state/project.state'
import { ProjectReducer } from './project-state/projects.reducuers'

export interface AppState {
    projects: ProjectState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    projects: ProjectReducer
}