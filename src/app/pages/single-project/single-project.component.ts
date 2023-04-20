import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/util/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectListProjects } from 'src/app/util/state/project-state/projects.selectors';
import { loadProjects } from 'src/app/util/state/project-state/projects.actions';
import { loadURL } from 'src/app/util/state/url-state/url.actions';


@Component({
	selector: 'app-single-project',
	templateUrl: './single-project.component.html',
	styleUrls: ['./single-project.component.scss']
})


export class SingleProjectComponent implements OnInit {

	projectSlug$: string
	project$: any
	projectList$: Observable<any> = new Observable()

	constructor(private route: ActivatedRoute, private store: Store<AppState>) {
		this.projectSlug$ = this.route.snapshot.params['slug']
	}

	openImage(url: string) {
		this.store.dispatch(loadURL({ url }));
		document.body.style.overflow = 'hidden'
	}

	ngOnInit(): void {
		// DISPATCH LOADPROJECTS FIRST SO THE EFFECTS TRIGGER THE NEXT REDUCER WHERE DATA IS LOADED
		this.projectList$ = this.store.select(selectListProjects)
			.pipe(
				map(item => item.filter(proj => proj.slug === this.projectSlug$))
			);


		// SETTIMEOUT PREVENTS US FROM GETTING A STATE CHANGE ERROR
		setTimeout(() => {
			this.store.dispatch(loadProjects())
		})

	}
}
