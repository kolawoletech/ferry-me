import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../auth/auth.headers';
import { Observable } from 'rxjs/Rx';
import { User } from './user.class';

const baseUrl = 'https://ferry-me-web.herokuapp.com/api/users';

@Injectable()
export class UserService {
  constructor(public http: Http) {}

  public createUser(user: User): Observable<any>{
    let response = this.http.post(baseUrl, user,
     {headers:contentHeaders}).map(this.logResponse.bind(this));;
    return response;
  }

  public updateUser(user: User): Observable<any>{
    let response = this.http.put(baseUrl, user,
      {headers:contentHeaders}).map(this.logResponse.bind(this));
    return response;
  }

  private logResponse(response: Response):any{
    return response.json();
  }

  public getUsersByName(name: string): Observable<User[]> {
    let users = this.http.get(baseUrl+'/search/'+encodeURI(name),
     {headers:contentHeaders}).map(this.mapUsers.bind(this));
    return users;
  }

  public getUserByUserId(id: string):Observable<any>{
    let user = this.http.get(baseUrl + '/' + encodeURI(id),
      {headers:contentHeaders}).map(this.logResponse.bind(this));
    return user;
  }

  private mapUsers(response: Response): User[] {
    return response.json().map(this.toUser.bind(this));
  }

  private toUser(r: any): User {
    console.log(r);
    let user = <User>({
      name: r.name,
      userId: r.userId,
      peerId: r.peerId
    })
    return user;
  }

}
