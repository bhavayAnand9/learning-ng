import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepos } from './repos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchResposService {

  constructor(private http: HttpClient) { }

  getRepos(userHandle: string): Observable<UserRepos[]>{
    return this.http.get<UserRepos[]>(`https://api.github.com/users/${userHandle}/repos`);
  }
}
