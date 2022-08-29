import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent  {

  public form: FormGroup;
  error: string = "";

  constructor(  public fb: FormBuilder, public router: Router, public authService: AuthService) {
    
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'rememberMe': false
    });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
    
      this.authService
        .login(values['email'], values['password'])
        .subscribe(
          result => {
           
            if (result) {
              let acount: User = this.authService.getUser();
              if (!acount) {
                this.error = "Compte inactif";
                this.authService.logout();
                return;
              }
            }
            this.error = "";
            this.router.navigate(['/']);
          },
          reason => {
          
            console.error(reason);
            if (reason.status === 401) {
              this.error = reason.error;
            } else {
              this.error = reason.message;
            }
            this.error = "Identifiant incorrectes";
            console.error(this.error);
          }
        );
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      
    });
  }
}
