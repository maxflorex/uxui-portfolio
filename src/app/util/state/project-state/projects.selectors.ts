import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { ProjectState } from './project.state'

// SELECTOR RELATED TO PROJECTSLISTS
export const selectProjectsFeature = (state: AppState) => state.projectsList

export const selectListProjects = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.projects
)

export const selectLoading = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.loading
)