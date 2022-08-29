import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, Observable } from 'rxjs';

import { BackendServer } from "src/environments/backend-server-conf";

import { User } from './user';


const helper = new JwtHelperService();
const loginHeaders = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    token: "noToken"
  })
};

@Injectable()

export class AuthService {

  readonly apiUrl: string = `${BackendServer.backendUrl}`;
  readonly currentUser: string = "currentUser";
  readonly currentToken: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    // if (isDEBUG) console.log(`login with username ${username}`);
    const credentials = { email: username, password: password };
    console.log(credentials)
    return this.http
      .post(`${this.apiUrl}/login_check`, credentials, {
        observe: "response",
        headers: loginHeaders.headers
      }).pipe(map(response => {
        console.log(response);
        const token = response.body["token"];
        const decodedToken = helper.decodeToken(token);
        sessionStorage.setItem(this.currentToken, token);
        this.setUser(decodedToken);
      
        return true;
      }))
      ;
  }

  getUserConnected(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/usersConnected`).pipe(map((map) => map));
  }

  verifyPassword(username: string, password: string): Observable<boolean> {
    const credentials = { username: username, password: password };
    return this.http
      .post(`${this.apiUrl}/login_check`, credentials, {
        observe: "response",
        headers: loginHeaders.headers
      }).pipe(map(response => {
        const token = response.body["token"];
        const decodedToken = helper.decodeToken(token);
        console.log(decodedToken);

        if (decodedToken.id) {
          return true;
        }
        return false;
      })
      )
      ;
  }

  getDetails() {
    this.http.get(`${this.apiUrl}/users/details`, { observe: "response" })
      .subscribe(details => {
        this.setUser(details.body);
      });
  }

  setUser(user: any) {
    sessionStorage.setItem(this.currentUser, JSON.stringify(user));
  }

  getToken(): string {
    return sessionStorage.getItem(this.currentToken);
  }

  isLoggedIn(): boolean {
    const token: string = this.getToken();
    return token && token.length > 0;
  }

  logout(): void {
    sessionStorage.removeItem(this.currentToken);
    sessionStorage.removeItem(this.currentUser);
    sessionStorage.clear();
    // this.router.navigate(["/login"]);
  }

  getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.currentUser)) as User;
  }


  isAcountActivated() {

    this.getUserConnected().subscribe((res) => {
      console.log(res);
      if (!res) {
        this.logout();
        this.router.navigate(["/login"]);

        return;
      }
    });
  }

  register(newData: any) {
    return this.http.post<any>(`${this.apiUrl}/users/register`, newData);
  }

  editUser(newData: any) {
    return this.http.put(`${this.apiUrl}/api/users/${newData.id}`, newData);
  }

  updateUser(body) {
    return this.http.post(`${this.apiUrl}/api/users/profil`, body);
  }
}
