import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://ng-http-b5e6a.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://ng-http-b5e6a.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://ng-http-b5e6a.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}
