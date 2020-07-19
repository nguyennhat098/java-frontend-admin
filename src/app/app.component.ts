import { Actions } from './roles/Actions';
import { Menus } from './shared/Menus';
import { CommonService } from './shared/common.service';
import { AuthenticationServices } from './helpers/authentication.service';
import { Users } from './users/user';
import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser;
  menus:Menus[];
  title = 'java-frontend';
  constructor(private router: Router,
    private _commonService:CommonService,
    private authenticationService: AuthenticationServices,
    private _router:Router) {
          this.authenticationService.currentUser.subscribe((x: any) =>{
            this.currentUser = x;
            if(this.currentUser){
              // this._commonService.getByRoleId(x.user.roleId.id).subscribe(val=> {
              //   this.menus=val;
              // });
              this._commonService.getActionByRole(x.user.roleId.id).subscribe(val=>{
                var listAction=[];
                for (let index = 0; index < val.length; index++) {
                  const element = val[index];
                 var action=new Actions({id:element[0],actionName:element[1]});
                 listAction.push(action);
                }
                localStorage.setItem('currentAction', JSON.stringify(listAction));
              })
            }
      });
     
  }
  //   get isAdmin() {
  //     return this.currentUser && this.currentUser.role === Role.Admin;
  // }
  ngOnInit() {
    if(this.currentUser){
      this._commonService.getByRoleId(this.currentUser.user.roleId.id).subscribe(val=> {
        this.menus=val;
        
      });
    }
  }

  logout() {
    this.menus=null;
    this.authenticationService.logout();
    // this.router.navigate(['/login']);
  }
}
