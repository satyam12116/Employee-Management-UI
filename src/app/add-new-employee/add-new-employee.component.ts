import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit {
  custId!:any;
  ans:any;
  closePopup=true;
  constructor(private fb: FormBuilder,private http:HttpClient,private customerService:UserserviceService,private _snackBar:MatSnackBar) {}
  rentForm = this.fb.group({
    employeeID:['',Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    fullname: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
    designation: ['', Validators.required],
    email: ['', Validators.required],


  });
  ngOnInit(): void {
this.customerService.Customersubject.subscribe(res=>{
  if(res){
    this.custId=res.userId;
  }
})
  }
  addEmp() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 
    let body={

employeeID:this.rentForm.get('employeeID')?.value,
firstname:this.rentForm.get('firstname')?.value,
lastname:this.rentForm.get('lastname')?.value,
fullname:this.rentForm.get('fullname')?.value,
gender:this.rentForm.get('gender')?.value,
role:this.rentForm.get('role')?.value,
designation:this.rentForm.get('designation')?.value,
email:this.rentForm.get('email')?.value,
    }
    if (this.rentForm.valid) {
      this.http.post<any>('http://localhost:7013/Employee',body,httpOptions).subscribe((res:any)=>{
      if(res){
        this._snackBar.open("Employee added successfully", 'X', {
          horizontalPosition: 'start',
          verticalPosition: 'top',
        })
       this.closePopup=false;
      }
      else{
       console.log('err');

      }
      })
    }
  }
}
