import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  public userAuth = false;
  constructor() {
    console.log(this.userAuth);
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('username'));
    if (sessionStorage.getItem('username') != null) {
      this.userAuth = true;
    }
  }
}
