import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  customers!: any;
  path!:string;

  constructor(private http:HttpClient,public dialog: MatDialog,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.path = segments.map(segment => segment.path).join('/');
      console.log('Current Route Path:', this.path);
    });
    this.http.get<any>('http://localhost:7013/Employee').subscribe(res=>{
      this.customers=res;
    })
    // this.customers=[
    //   {
    //     "employeeID": 1,
    //     "firstname": "Satyam",
    //     "lastname": "Kumar",
    //     "fullname": "SAtyam Kumar",
    //     "gender": "male",
    //     "role": "developer",
    //     "designation": "SE",
    //     "email": "sa@gmail.com"
    //   },
      
    //   {
    //     "employeeID": 1,
    //     "firstname": "Satyam",
    //     "lastname": "Kumar",
    //     "fullname": "SAtyam Kumar",
    //     "gender": "male",
    //     "role": "developer",
    //     "designation": "SE",
    //     "email": "sa@gmail.com"
    //   },
    //   {
    //     "employeeID": 1,
    //     "firstname": "Satyam",
    //     "lastname": "Kumar",
    //     "fullname": "SAtyam Kumar",
    //     "gender": "male",
    //     "role": "developer",
    //     "designation": "SE",
    //     "email": "sa@gmail.com"
    //   },
    //   {
    //     "employeeID": 1,
    //     "firstname": "Satyam",
    //     "lastname": "Kumar",
    //     "fullname": "SAtyam Kumar",
    //     "gender": "male",
    //     "role": "developer",
    //     "designation": "SE",
    //     "email": "sa@gmail.com"
    //   },
    // ]
    
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
  delete(customer: any) {
    this.http.delete<any>(`http://localhost:7013/Employee/emp/${customer.employeeID}`).subscribe(res=>{
     
    })
  }
}

