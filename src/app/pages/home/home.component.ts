import { Component, OnInit } from '@angular/core';
import { HygraphService } from 'src/app/service/hygraph.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public HygraphService: HygraphService) { }

  getProjects() {
    this.HygraphService.projects.then((res: any) => {
      console.log(res?.projects);
    }).catch(() => {
      console.log('Oops! Something is not working');
    })
  }

  ngOnInit(): void {
    this.getProjects()
  }

}
