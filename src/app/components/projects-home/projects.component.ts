import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/util/state/app.state';
import { loadProjects } from 'src/app/util/state/project-state/projects.actions';
import { selectListProjects } from 'src/app/util/state/project-state/projects.selectors';

@Component({
	selector: 'Projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {



	projectList$: Observable<any> = new Observable()

	constructor(private store: Store<AppState>) { }

	ngOnInit(): void {

		// DISPATCH LOADPROJECTS FIRST SO THE EFFECTS TRIGGER THE NEXT REDUCER WHERE DATA IS LOADED
		this.projectList$ = this.store.select(selectListProjects)
			.pipe(
				map(items => items.slice(0, 2))
			);


		// SETTIMEOUT PREVENTS US FROM GETTING A STATE CHANGE ERROR
		setTimeout(() => {
			this.store.dispatch(loadProjects())
		})

		console.log(this.projectList$);
		
		
	}

}
