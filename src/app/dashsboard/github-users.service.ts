import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  results;
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    const url = "https://api.github.com/users?since=30";
    return this.http.get(url).map(
      res => {
        const data = res;
        return data;
      }
    )
  }
  getSingleUser(userId){
    const url1 = "https://api.github.com/users/"+userId;
    return this.http.get(url1).map(
      res => {
        const singleData = res;
        return singleData;
      }
    )
  }
}
