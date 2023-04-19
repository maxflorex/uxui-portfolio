import { GraphQLClient } from 'graphql-request';
import { enviroment } from 'src/enviroments/enviroment';
import { Injectable } from '@angular/core';
import { delay, from, Observable } from 'rxjs';
import { getProjects, getSingleProjects } from './query';


@Injectable({
	providedIn: 'root'
})

export class HygraphService {

	// CONNECT TO HYGRAPH
	hygraphClient = new GraphQLClient(
		enviroment.graphcmsEndpoint
	);


	// GET PROJECT DATA
	getDataApi(): Observable<any> {
		const projectsPromise = this.hygraphClient.request(getProjects);
		const projectsObservable = from(projectsPromise).pipe(delay(1000));
		return projectsObservable;
	}

	// GET PROJECT DATA
	getSingleDataApi(slug: any): Observable<any> {
		const projectsPromise = this.hygraphClient.request(getSingleProjects, slug);
		const projectsObservable = from(projectsPromise).pipe(delay(1000));
		return projectsObservable;
	}

	constructor() { }
}