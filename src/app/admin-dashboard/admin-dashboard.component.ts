import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 carRequests!:any;
  constructor(private http:HttpClient,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  this.http.get<any>('http://localhost:3000/carRequest').subscribe(res=>{
    this.carRequests=res;
  })
  }
  approve(carReq:any){
    let body={
      customerId:carReq.customerId,
      carType: carReq.carType,
      days: carReq.days,
      requestDate: carReq.requestDate,
      status: 'approved',
      id: carReq.id
    }
    this.http.put<any>(`http://localhost:3000/carRequest/${carReq.id}`,body).subscribe(res=>{
      this._snackBar.open("Request accepted successfully", 'close', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
   this.ngOnInit();
  })
  }
  reject(carReq:any){
    let body={
      customerId:carReq.customerId,
      carType: carReq.carType,
      days: carReq.days,
      requestDate: carReq.requestDate,
      status: 'rejected',
      id: carReq.id
    }
    this.http.put<any>(`http://localhost:3000/carRequest/${carReq.id}`,body).subscribe(res=>{
      this._snackBar.open("Request rejected successfully", 'close', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
   this.ngOnInit();
  })
  }
  }


