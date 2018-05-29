import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photo: string;
  configUrl = 'https://api.unsplash.com/search/photos?orientation=landscape&query=livingroom&client_id=6cf83d64f7e477dcb3c05dfb14ce0c5597371382bf08d208190e4288a1db45c2';
  unsplash: any = [];
  height: string;
  repeat: string;
  cover: string;
  center: string;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getConfig();
  }


  getConfig() {
    this.http.get(this.configUrl).subscribe(data => {
      this.unsplash = data;
      this.chooseImage();
    })
  }



  chooseImage() {
    const i = Math.floor(Math.random() * 10);
    const img = this.unsplash.results[i].urls.regular;
    console.log(this.unsplash.results[i]);
    this.photo = img;
    this.height = '100%';
    this.repeat = 'no-repeat';
    this.center = 'center';
    this.cover = 'cover';
  }

}

