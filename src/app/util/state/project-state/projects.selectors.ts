import { createSelector } from '@ngrx/store'
import { AppState } from './app.state'
import { ProjectState } from './project.state'

// SELECTOR RELATED TO ITEMS
export const selectProjectsFeature = (state: AppState) => state.projects

export const selectListItems = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.projects
)

export const selectLoading = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.loading
)
