import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BlogPost } from './blog-post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  private postUrl = 'http://localhost:7000/blogs';
  // private postUrl = 'http://system4dev.rotorooter.com:8080/api/content/id/d53463d3-07af-4298-b6c2-cc2adc2258e4';

  // getPost(): Observable<BlogPost>{
  //   return this.http.get<BlogPost>(this.postUrl);
  // }
  getPost(): Observable<BlogPost>{
    return this.http.get<BlogPost>(this.postUrl);
  }

}
