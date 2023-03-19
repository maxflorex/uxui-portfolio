import { GraphQLClient } from 'graphql-request';
import { enviroment } from 'src/enviroments/enviroment';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { getProjects } from './query';


@Injectable({
  providedIn: 'root'
})

export class HygraphService {

  hygraphClient = new GraphQLClient(
    enviroment.graphcmsEndpoint
  );

  projects = this.hygraphClient.request(getProjects)

  constructor() { }
}