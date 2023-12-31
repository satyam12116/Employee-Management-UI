import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent  {

  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])

  constructor(private router: Router,private userService:UserserviceService,private _snackBar:MatSnackBar) {}

  canLogin() {
    return this.username.valid && this.password.valid;
  }

  login() {
    if (this.username.value === 'admin@gmail.com' && this.password.value === 'admin') {
      this._snackBar.open("admin login successfully", 'close', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
      this.userService.Customersubject.next({state:'adminDashboard'})
      this.router.navigateByUrl('admin-dashboard');
    }
  }
}