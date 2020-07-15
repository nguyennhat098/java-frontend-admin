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
  returnUrl: string;
  message = '';
  user:Users=new Users();
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServices) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit() {
    if (!this.user.userName&&!this.user.password) {
      return;
    }
    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.message=data.user.message;
          this.router.navigate([this.returnUrl]);
          setTimeout(() => {
            location.reload();
          }, 5);
        },
        error => {
          this.message = error;
        });
    // throw Error('something go wrong');
  }
}
