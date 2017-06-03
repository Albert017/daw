import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private html:string ="posts";
  constructor() { }

  ngOnInit() {
  }

  goToMenu(menu:string){
    this.html=menu;
  }

}
