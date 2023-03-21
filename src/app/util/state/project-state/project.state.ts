import { ProjectModel } from "./project.interface";


export interface ProjectState {
    loading: boolean,
    projects: ReadonlyArray<ProjectModel>
}