import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AppState } from 'src/app/util/state/app.state';
import { loadProjects } from 'src/app/util/state/project-state/projects.actions';
import { selectListProjects } from 'src/app/util/state/project-state/projects.selectors';

@Component({
	selector: 'Projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

	projectList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	itemsToShow: number = 2;
	totalItems: number = 0;
	showLoadMoreButton: boolean = true;

	constructor(private store: Store<AppState>) { }

	ngOnInit(): void {

		// DISPATCH LOADPROJECTS FIRST SO THE EFFECTS TRIGGER THE NEXT REDUCER WHERE DATA IS LOADED
		this.store.dispatch(loadProjects());

		// SET INITIAL VALUE - BEHAVIOUR SUBJECT
		this.store.select(selectListProjects)
			.pipe(
				map(items => {
					this.totalItems = items.length;
					return items.slice(0, this.itemsToShow);
				})
			)
			.subscribe(projectList => {
				this.projectList$.next(projectList);
			});
	}

	loadMoreProjects(): void {
		// INCREASE NUMBER OF ITEMS TO SHOW
		this.itemsToShow += 2;
		// UPDATE PROJECTLIST BEHAVIORSUBJECT WITH UPDATED ITEMSTOSHOW
		this.store.select(selectListProjects)
			.pipe(
				map(items => {
					// CHECK IF ALL ITEMS ARE SHOWN
					if (this.itemsToShow >= this.totalItems) {
						this.showLoadMoreButton = false;
					}
					return items.slice(0, this.itemsToShow);
				})
			)
			.subscribe(projectList => {
				this.projectList$.next(projectList);
			});
	}
}
