import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EmployeeAuthComponent } from './employee-auth/employee-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeAuthComponent,
    AdminAuthComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    AddNewEmployeeComponent,
    HomeComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
   MatFormFieldModule,
   HttpClientModule,
   MatInputModule,
   MatDialogModule,
   MatCardModule,
   MatButtonModule,
   MatNativeDateModule,
   MatIconModule,
   ReactiveFormsModule,
   MatDatepickerModule,
   MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
