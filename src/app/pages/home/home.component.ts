import { Component, OnInit } from '@angular/core';
import { HygraphService } from 'src/app/util/service/hygraph.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public data$: any = []

	constructor(public HygraphService: HygraphService) { }

	async getProjects() {
		this.HygraphService.projects.then((res: any) => {
			this.data$ = 'Caballo'
		}).catch(() => {
			console.log('Oops! Something is not working');
		})
	}

	ngOnInit(): void {
		this.getProjects()
	}

}
