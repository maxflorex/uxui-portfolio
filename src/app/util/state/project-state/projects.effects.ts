import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { HygraphService } from '../../service/hygraph.service';
import { EMPTY } from 'rxjs'


@Injectable()
export class ProjectEffect {

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType('[Projects List] Set Projects'),
        mergeMap(() => this.hygraph.getDataApi()
            .pipe(
                map(proj => ({ type: '[Projects List] Projects Loaded Success', projects: proj.projects })),
                catchError(() => EMPTY)
            ))
    ))

    constructor(
        private actions$: Actions,
        private hygraph: HygraphService,
    ) { }

}