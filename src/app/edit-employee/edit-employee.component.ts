import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  checkFlag=true;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,private http:HttpClient,private dialog :MatDialogRef<any>,private _snackBar:MatSnackBar
  ) {}

  editForm = this.fb.group({
    employeeID:[this.data?.employeeID,Validators.required],
    firstname: [this.data?.firstname, Validators.required],
    lastname: [this.data?.lastname, Validators.required],
    fullname: [this.data?.fullname, Validators.required],
    gender: [this.data?.gender, Validators.required],
    role: [this.data?.role, Validators.required],
    designation: [this.data?.designation, Validators.required],
    email: [this.data?.email, Validators.required],
  });

  ngOnInit(): void {
   
  }
  modify() {
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
   const body = {
    employeeID:this.editForm.get('employeeID')?.value,
    firstname:this.editForm.get('firstname')?.value,
    lastname:this.editForm.get('lastname')?.value,
    fullname:this.editForm.get('fullname')?.value,
    gender:this.editForm.get('gender')?.value,
    role:this.editForm.get('role')?.value,
    designation:this.editForm.get('designation')?.value,
    email:this.editForm.get('email')?.value,
    };
    console.log(this.editForm);
    this.http
      .put<any>(`http://localhost:7013/Employee/emp/${this.editForm.get('employeeID')?.value}`, body,httpOptions)
      .subscribe((res) => {
        this._snackBar.open("profile updated successfully", 'close', {
          horizontalPosition: 'start',
          verticalPosition: 'top',
        })
        this.dialog.close();
        if (res) {
        this.ngOnInit();
        
        } else {
          console.log('error');
        }
      });
  }

}
