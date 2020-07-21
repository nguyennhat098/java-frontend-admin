import { Actions } from './roles/Actions';
import { Menus } from './shared/Menus';
import { CommonService } from './shared/common.service';
import { AuthenticationServices } from './helpers/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser;
  menus: Menus[];
  title = 'java-frontend';
  constructor(private router: Router,
    private _commonService: CommonService,
    private authenticationService: AuthenticationServices) {}

  ngOnInit() {
    this.authenticationService.currentUser.subscribe((x: any) => {
      this.currentUser = x;
      if (this.currentUser) {
        this._commonService.getActionByRole(x.user.roleId.id).subscribe(val => {
          var listAction = [];
          for (let index = 0; index < val.length; index++) {
            const element = val[index];
            var action = new Actions({ id: element[0], actionName: element[1] });
            listAction.push(action);
          }
          localStorage.setItem('currentAction', JSON.stringify(listAction));
        });
        this._commonService.getByRoleId(this.currentUser.user.roleId.id).subscribe(val => {
          this.menus = val;
        });
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  logout() {
    this.menus = null;
    this.authenticationService.logout();
  }
}
