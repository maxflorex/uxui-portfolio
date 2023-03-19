import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { HygraphService } from 'src/app/util/service/hygraph.service'
import { loadProjects } from './projects.actions'

@Injectable()
export class ItemEffect {

    loadProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProjects),
            mergeMap(() => this.hygraph.projects),
            map(projects => ({ type: '[Project] Projects Loaded Success', payload: {projects} }))
        ))


    constructor(
        private actions$: Actions,
        private hygraph: HygraphService,
    ) { }
}