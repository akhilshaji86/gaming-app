import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(['', Validators.required]),
    password: new FormControl(['', Validators.required])
  });
  submitted = false;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private appService: AppService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })

  }
  logIn() {  
    this.dialogRef.close();
    this.appService.setLoggedIn(true);
  }
  createAccount(){
    this.dialogRef.close('createAccount');
  }
}
