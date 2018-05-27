import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  photo: string;
  public background_color = "grey";

  ngOnInit() {
    this.photo = "/assets/room-4.jpg";
  }

}
