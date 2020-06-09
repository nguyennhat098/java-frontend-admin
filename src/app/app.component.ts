import { AuthenticationServices } from './helpers/authentication.service';
import { Users } from './users/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: Users;
  title = 'java-frontend';
  constructor( private router: Router,
    private authenticationService: AuthenticationServices){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      console.log(this.currentUser)
  }
//   get isAdmin() {
//     return this.currentUser && this.currentUser.role === Role.Admin;
// }

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
