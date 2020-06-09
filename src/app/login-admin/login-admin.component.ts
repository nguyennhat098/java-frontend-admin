import { AuthenticationServices } from './../helpers/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from './../users/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  user: FormGroup;
  returnUrl: string;
  error = '';
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServices) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit() {
    // Do something awesome
    console.log(this.user.value);
    this.authenticationService.login(this.user.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        });
    // throw Error('something go wrong');
  }
}
