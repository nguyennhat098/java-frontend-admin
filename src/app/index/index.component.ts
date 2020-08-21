import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IndexService } from './index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('myCanvas',{static:true})
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;
  statistic:any;
  data:any;
  year:number;
  constructor(private _indexService:IndexService) { }

  ngOnInit() {
    this.year=new Date().getFullYear();
    this._indexService.getstatistic().subscribe(val=>{
      this.statistic=val;
    });
    this._indexService.getLineChat().subscribe(val=>{
      this.chartData = [
      { data: val.successOrder[0], label: 'Success Order',fill:false },
      { data: val.totalOrder[0], label: 'Total Order',fill:false },
      { data: val.cancelOrder[0],  label: 'Cancel Order', fill: false }];
      this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','August','Sep','Oct','Nov','Dec'];
      this.chartColors  = [
        { // grey
          backgroundColor: 'rgb(64, 255, 0)',
          borderColor: 'rgb(64, 255, 0)',
          pointBackgroundColor: 'rgb(64, 255, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgb(0, 0, 255)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // red
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ];
      this.chartOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }]
        },
        annotation: {
           drawTime: 'beforeDatasetsDraw',
           annotations: [{
              type: 'box',
              id: 'a-box-1',
              yScaleID: 'y-axis-0',
              yMin: 0,
              yMax: 100,
              backgroundColor: '#4cf03b'
           }, {
              type: 'box',
              id: 'a-box-2',
              yScaleID: 'y-axis-0',
              yMin: 1,
              yMax: 80,
              backgroundColor: '#fefe32'
           }, {
              type: 'box',
              id: 'a-box-3',
              yScaleID: 'y-axis-0',
              yMin: 2.7,
              yMax: 50,
              backgroundColor: '#fe3232'
           }]
        }
      }
    })
  
  }

}
