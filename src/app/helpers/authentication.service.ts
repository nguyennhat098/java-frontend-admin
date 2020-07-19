import { Actions } from './../roles/Actions';
import { Auths } from './Auth';
import { Users } from './../users/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { environment } from '../../environment';
// import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationServices {
    private href = 'http://localhost:8080';
    // private href = 'http://localhost:8080';

    private currentUserSubject: BehaviorSubject<Auths>;
    public currentUser: Observable<Auths>;
    constructor(private http: HttpClient,private router:Router) {
        this.currentUserSubject = new BehaviorSubject<Auths>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Auths {
        return this.currentUserSubject.value;
    }

    login(users: Users) {
        return this.http.post<any>(`${this.href}/login/login`, users)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentAction');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('/login');
        // location.reload(true);
    }
    public checkAuthenticate(actionName: string): boolean {
        var currentActions = JSON.parse(localStorage.getItem('currentAction')) as Actions[];
        if (currentActions.find(x => x.actionName == actionName)) {
            return true;
        }
        return false;
    }
}