import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class JobspostsService {

  constructor(private http: HttpClient) { }




  jobposts(): Observable<any> {

    return this.http.get<any>('./assets/data.json')

  }
}


