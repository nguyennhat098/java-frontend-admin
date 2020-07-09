import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent implements OnInit {
  @Input() public image: string;
  constructor() { }

  ngOnInit() {
  }

}
