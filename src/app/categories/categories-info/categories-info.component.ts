import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-info',
  templateUrl: './categories-info.component.html',
  styleUrls: ['./categories-info.component.scss']
})
export class CategoriesInfoComponent implements OnInit {
  @Input() public image: string;
  constructor() { }

  ngOnInit() {
  }

}
