import { createReducer, on } from '@ngrx/store'
import { ProjectModel } from './project.interface'
import { ProjectState } from './project.state'
import { loadedProjectsSuccess, loadProjects } from './projects.actions'

// (1) - INITIAL STATE
export const initialState: ProjectState = {
    loading: false,
    projects: []
}


// (2) - REDUCERS DECLARED AT APP.MODULE LIKE {NAME: PROJECTREDUCER}
export const ProjectReducer = createReducer(
    initialState,
    on(loadProjects, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedProjectsSuccess, (state, { projects }) => {
        return { ...state, loading: false, projects: projects }
    }),
)