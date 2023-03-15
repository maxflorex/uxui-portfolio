import { GraphQLClient } from 'graphql-request';
import { environment } from 'src/enviroments/enviroment';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { getProjects } from './query';

// const graphcmsEndpoint: string = environment.graphcmsEndpoint;
// const graphcmsToken: string = environment.graphcmsToken;
// const headers = { authorization: `Bearer ${graphcmsToken}` };
// const graphqlClient = new GraphQLClient(graphcmsEndpoint, { headers });

// export const hygraph = new GraphQLClient(
//   environment.graphcms.graphcmsEndpoint
// );


@Injectable({
  providedIn: 'root'
})

export class HygraphService {

  hygraphClient = new GraphQLClient(
    environment.graphcmsEndpoint
  );

  projects = this.hygraphClient.request(getProjects)

  constructor() { }
}