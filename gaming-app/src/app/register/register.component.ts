import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  terms = true;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)]),
    country: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    promoCode: new FormControl('', [Validators.required])
  });
  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }
  logIn() {
    this.dialogRef.close('login');
  }
  passwordMatchValidator(fieldControl: FormControl) {
    return fieldControl.value === this.registerForm?.get("password")?.value ? null : {
      mismatch: true
    };
  }
}
