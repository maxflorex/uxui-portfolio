import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  name = ''
  email = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = 'Plutarco'
    this.email = 'yimail'
  }
  
}
