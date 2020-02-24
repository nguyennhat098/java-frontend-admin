import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
  public isActiveLeftBar:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  public ToggleSlideBar(){
    this.isActiveLeftBar=true;
  }
}
