import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.project = this.route.snapshot.params['project']
  }

}
