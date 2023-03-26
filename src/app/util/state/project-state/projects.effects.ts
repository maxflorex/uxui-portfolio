import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { GraphQLClient } from 'graphql-request';
import { map, mergeMap, catchError, switchMap, mapTo } from 'rxjs/operators'
import { HygraphService } from '../../service/hygraph.service';
import { loadProjects } from './projects.actions'
import { EMPTY } from 'rxjs'
import { Store } from '@ngrx/store';


@Injectable()
export class ProjectEffect {

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType('[Projects List] Set Projects'),
        mergeMap(() => this.hygraph.getDataApi().pipe(
            map(proj => ({ type: '[Projects List] Projects Loaded Succesfully', projects: proj })),
            catchError(() => EMPTY)
        ))
    ))

    constructor(
        private actions$: Actions,
        private hygraph: HygraphService,
        private store: Store
    ) { }

}