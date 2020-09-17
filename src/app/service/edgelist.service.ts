import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdgelistService {

  constructor(private http: HttpClient) { }

  load(fileName: string): Promise<any> {
    return this.http.get(fileName)
        .toPromise()
        .then( result => {
            return result;
        }).catch(err => {
          console.log(err.message);
        });
  }

}
