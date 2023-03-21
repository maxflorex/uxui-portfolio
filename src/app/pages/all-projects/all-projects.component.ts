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

    myItems$: any

    constructor(
        private store: Store<any>,
        private hygraph: HygraphService,
    ) { }

    ngOnInit(): void {
        this.items$ = this.store.select('projects')

        console.log(this.items$);
        

        // this.myItems$ = this.hygraph.projects.then((res: any) => {
        //     this.store.dispatch(loadedProjectsSuccess({ projects: res.projects }))
        // }).catch((error) => {
        //     console.log(error);

        // })

        // this.items$ = this.store.select(selectListItems).subscribe((item) => {
        //     console.log(item);
            
        // })
    }



}
