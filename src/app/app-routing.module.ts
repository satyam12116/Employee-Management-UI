
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeAuthComponent } from './employee-auth/employee-auth.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin-auth',
    component: AdminAuthComponent,
  },
  {
    path: 'user-auth',
    component: EmployeeAuthComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'user-dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: 'car-Request',
    component: AddNewEmployeeComponent,
  },
  {
    path: 'cust-list',
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
