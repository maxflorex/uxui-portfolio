
import { ActionReducerMap } from '@ngrx/store'
import { ProjectState } from './project-state/project.state'
import { ProjectReducer } from './project-state/projects.reducers'
import { urlReducer } from './url-state/url.reducers'

export interface AppState {
    projectsList: ProjectState,
    url: any
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    projectsList: ProjectReducer,
    url: urlReducer
}