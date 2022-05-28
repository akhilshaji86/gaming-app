import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private appService: AppService) { }

  ngOnInit(): void {
  }
  logIn() {
    this.dialogRef.close();
    this.appService.setLoggedIn(true);
  }
}
