import { Component, OnInit } from '@angular/core';
import * as chartData from '../data.json';

@Component({
  selector: 'line-chart-example',
  templateUrl: './line-chart-example.component.html',
  styleUrls: [ './line-chart-example.component.scss' ]
})
export class LineChartExampleComponent implements OnInit {
  chartData: any;
  tooltipText = `
  [bold]Campaign[/]
  {campaign}
  [bold]Date ended[/]
  {dateEnd}
  [bold]Targeted[/]
  {targets}
  [bold]Report-to-open ratio[/]
  {RTORatio}
  `;
  constructor(){}

  ngOnInit() {
    this.chartData = chartData;
  }
}