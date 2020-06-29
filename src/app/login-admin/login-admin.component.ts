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
  user: FormGroup;
  returnUrl: string;
  error = '';
  submitted:boolean=false;
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServices,
    private _commonService:CommonService) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.user.controls; }
  onSubmit() {
this.submitted=true;
if(this.user.invalid){
  return;
}
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
