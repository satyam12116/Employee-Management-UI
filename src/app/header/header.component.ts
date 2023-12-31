import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.Customersubject.subscribe(res=>{
      if(res){
        this.menuType=res.state;
      }
    })
  }
  handler(){
    this.userService.Customersubject.next({state:'default'});
  }

}
