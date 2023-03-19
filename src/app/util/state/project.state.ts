export interface ProjectModel {
    id: string;
    title: string;
}

export interface ProjectState {
    loading: boolean,
    projects: ReadonlyArray<ProjectModel>
}