import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() titulo: string = 'Sin titulo';
  @Input() labels: string[] = ['Label1','Label2','Label3'];
  @Input() data: number[] = [10,20,30];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public options: ChartOptions = {
    backgroundColor(ctx, options) {
      return ['#6857E6', '#009FEE', '#F02059'][ctx.dataIndex];
    }
  }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.data }
      ],
    };
  }

}
