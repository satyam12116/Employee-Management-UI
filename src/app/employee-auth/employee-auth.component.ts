import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-employee-auth',
  templateUrl: './employee-auth.component.html',
  styleUrls: ['./employee-auth.component.scss']
})
export class EmployeeAuthComponent implements OnInit {

  showLogin = true;
  user!: any;
  constructor(
    private customerService: UserserviceService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,private _snackBar:MatSnackBar
  ) {}

  

  login() {
    this.http.get<any>('http://localhost:3000/signup').subscribe((res: any) => {
      let user = res.find((a: any) => {
        return (
          a.email === this.loginForm.get('email')?.value &&
          a.password === this.loginForm.get('password')?.value
        );
      });
      console.log(user, 'sdjjd');
      if (user) {
        this._snackBar.open("user logged in successfully", 'close', {
          horizontalPosition: 'start',
          verticalPosition: 'top',
        })
        this.customerService.Customersubject.next({userId:user.id,state:'userDashboard'});
        console.log(res.id)
        this.router.navigate(['/user-dashboard']);
      } else {
        // alert('error')
      }
    });
  }

  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    state: ['', Validators.required],
    phone: ['', Validators.required],
    aadhaar: ['', Validators.required],
    email: ['', Validators.required],
    salary: ['', Validators.required],
    dob: ['', Validators.required],
    password: ['', Validators.required],
    creditScore: ['', Validators.required],
  });
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    // this.customerService.customerList().subscribe(res=>{
    //   console.log(res)
    // })
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
  signUp() {
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
   const body = {
      fist_name: this.customerForm.get('firstName')?.value,
      last_name: this.customerForm.get('lastName')?.value,
      city: this.customerForm.get('city')?.value,
      gender: this.customerForm.get('gender')?.value,
      state: this.customerForm.get('state')?.value,
      contact_no: parseInt(this.customerForm.get('phone')?.value),
      email: this.customerForm.get('email')?.value,
      password: this.customerForm.get('password')?.value,
    };
    console.log(this.customerForm);
    this.http
      .post<any>('http://localhost:3000/signup', body,httpOptions)
      .subscribe((res) => {
        if (res) {
          this._snackBar.open("user SignUp successfully", 'close', {
            horizontalPosition: 'start',
            verticalPosition: 'top',
          })
         this.showLogin=true;
        } else {
          console.log('error');
        }
      });
  }

}
