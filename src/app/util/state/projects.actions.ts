import { createAction, props } from '@ngrx/store';
import { ProjectModel } from './project.state';


export const loadProjects = createAction(
    '[Projects List] Load Projects'
);

export const loadedProjectsSuccess = createAction(
    '[Projects List] Projects Loaded',
    props<{ projects: ProjectModel[] | unknown}>()
);



