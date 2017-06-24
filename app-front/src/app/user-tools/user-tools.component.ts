import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.css']
})
export class UserToolsComponent implements OnInit {
  private html: string = "settings";
  constructor() { }

  ngOnInit() {
  }

  goToMenu(s: string){
    this.html=s;
  }

}
