import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  getUrl() {
    return "url('https://cdn.sixt.io/cms/originals/62fd6a15-e739-460f-bd3e-2ce5e5efb864.jpg')";
  }
}

