import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HygraphService } from 'src/app/util/service/hygraph.service';
import { AppState } from 'src/app/util/state/app.state';
import { ProjectModel } from 'src/app/util/state/project-state/project.interface';
import { loadedProjectsSuccess, loadProjects } from 'src/app/util/state/project-state/projects.actions';
import { selectLoading } from 'src/app/util/state/project-state/projects.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

	project$!: Observable<ProjectModel[]>;
	loading$: Observable<boolean> = new Observable()

	constructor(private store: Store<AppState>, private hygraphService: HygraphService) { }

	ngOnInit(): void {

		// CHECK IF LOADING
		// this.store.dispatch(loadProjects())


		// // CONSUMING THE API AND STORE DATE IN STATE
		// this.hygraphService.getDataApi().subscribe((res: ProjectModel[]) => {
		// 	this.store.dispatch(loadedProjectsSuccess({ projects: res }))
		// })


		// SELECTOR TO CHECK IF IT'S LOADING
		this.loading$ = this.store.select(selectLoading)

	}

}
