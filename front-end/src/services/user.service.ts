import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { User } from '../models/user.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {USER_LIST} from "../mocks/user.mock";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of user.
   */
  private users: User[] = USER_LIST;ù

  private user : User=null;

  /*
   Observable which contains the list of the user.
   */
  public users$: BehaviorSubject<User[]>
    = new BehaviorSubject([]);

  public user$: BehaviorSubject<User>
    = new BehaviorSubject(this.user);

  public userSelected$: Subject<User> = new Subject();

  private userUrl = serverUrl + '/users';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
      this.users$.next(this.users)
  }

  retrieveUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  addUser(user: User): void {
    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  async setSelectedUser(userId: string) {
    const urlWithId = this.userUrl + '/' + userId;
    return this.http.get<User>(urlWithId);
  }

  deleteUser(userid: string): void {
    const urlWithId = this.userUrl + '/' + userid;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  updateUser(user: User,id:string):void{
    console.log(user)
    this.http.put<User>(this.userUrl+"/"+id, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }
}
