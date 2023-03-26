import { createAction, props } from '@ngrx/store';
import { ProjectModel } from './project.interface';


export const loadProjects = createAction(
    '[Projects List] Set Projects',
);

export const loadedProjectsSuccess = createAction(
    '[Projects List] Projects Loaded Succesfully',
    props<{ projects: ProjectModel[]}>()
);



