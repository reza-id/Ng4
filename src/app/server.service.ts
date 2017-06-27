import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    return this.http.post('https://ng-http-b5e6a.firebaseio.com/data.json', servers);
  }
}
