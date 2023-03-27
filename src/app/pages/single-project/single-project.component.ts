import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
	selector: 'app-single-project',
	templateUrl: './single-project.component.html',
	styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {

	projectSlug$: Observable<string> = new Observable()

	constructor(private route: ActivatedRoute) {

		this.projectSlug$ = this.route.snapshot.params['slug']
	}
}
