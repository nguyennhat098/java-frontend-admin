import { Users } from './../users/user';
import { CommonService } from './../shared/common.service';
import { AuthenticationServices } from './../helpers/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  message = '';
  user:Users=new Users();
  constructor(
    private router: Router,
    private authenticationService: AuthenticationServices) { }

  ngOnInit() {
    if(this.user.id){
      this.router.navigateByUrl('/');
    }else{
      this.router.navigateByUrl('/login');
    }
  }
  onSubmit() {
    if (!this.user.userName&&!this.user.password) {
      return;
    }
    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          if(data.user.message=='true'){
            this.user=data.user;
            this.router.navigateByUrl('/product');
            setTimeout(() => {
              location.reload();
            }, 5);
          }else{
            this.message=data.user.message;
          }
        },
        error => {
          this.message = error;
        });
    // throw Error('something go wrong');
  }
}
