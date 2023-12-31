import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  ans!:any;
  Customersubject = new BehaviorSubject(this.ans);
  constructor() { }
}
