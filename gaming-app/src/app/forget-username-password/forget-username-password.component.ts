import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../services/account.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-forget-username-password',
  templateUrl: './forget-username-password.component.html',
  styleUrls: ['./forget-username-password.component.scss']
})
export class ForgetUsernamePasswordComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(public dialogRef: MatDialogRef<ForgetUsernamePasswordComponent>,
    private accountService: AccountService, private appService: AppService) { }

  ngOnInit(): void {
  }
  reset(login: 'username' | 'password') {
    this.dialogRef.close(login);
    this.accountService.forgetUsernamePassword(login, this.loginForm.value.email).subscribe(res => {
      this.appService.showToaster(res.message, 'success!');
    })
  }

}
