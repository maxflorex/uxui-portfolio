import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { HygraphService } from 'src/app/util/service/hygraph.service';

@Component({
    selector: 'app-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.scss']
})

export class AllProjectsComponent implements OnInit {

    loading$: Observable<boolean> = new Observable()
    items$: Observable<any> = new Observable()

    constructor(
        private store: Store<any>,
        private hygraph: HygraphService,
    ) { }

    ngOnInit(): void {

    }



}
