import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges {

  @Input() Projects: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.Projects);

  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.data)
  }

}
