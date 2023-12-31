import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
customer!:any;
showProfile:boolean=false;
showListEmp:boolean=false;
addEmp:boolean=false

  constructor(private customerService:UserserviceService,private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.customerService.Customersubject.subscribe(res=>{
      if(res){
      this.http.get<any>(`http://localhost:7013/Employee/emp/${res.userId}`).subscribe(res=>{
      this.customer=res;
      })
    }
    })
  }
  profile(){
this.showProfile=true;
this.addEmp=false;
this.showListEmp=false;
  }
  add(){
    this.showProfile=false;
    this.addEmp=true;
    this.showListEmp=false;
  }
  empList(){
    this.showProfile=false;
    this.addEmp=false;
    this.showListEmp=true;
  }
  approve(customer: any) {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: customer,
      panelClass: 'editComp',
      height: '900px',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
