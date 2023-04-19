import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/util/service/shared.service';


@Component({
	selector: 'Navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

	constructor(public sharedService: SharedService) {
	}

	openContact() {
		this.sharedService.toggleContact();
	}


}