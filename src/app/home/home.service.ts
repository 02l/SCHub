import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(public http: Http) { }

  getLobbyList():Observable<any> {
    return this.http.get('/api/room')
    .map(data => {
      return data.json()
    })
  }

}
