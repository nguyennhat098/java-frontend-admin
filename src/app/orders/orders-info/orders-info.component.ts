import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.component.html',
  styleUrls: ['./orders-info.component.scss']
})
export class OrdersInfoComponent implements OnInit {
  @Input() public image: string;
  constructor() { }

  ngOnInit() {
  }

}
