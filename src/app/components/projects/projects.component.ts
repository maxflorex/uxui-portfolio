import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

	constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

	ngOnInit(): void {

		// DISPATCH LOADPROJECTS FIRST SO THE EFFECTS TRIGGER THE NEXT REDUCER WHERE DATA IS LOADED
		this.store.dispatch(loadProjects())

		this.projectList$ = this.store.select(selectListProjects)		

		console.log(this.projectList$);
		
	}

}
