import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'sc-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [ './line-chart.component.scss' ]
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('chartdiv') chartElem: ElementRef;
  // Raw data to be consumed by the chart.
  @Input() chartData: any[];
  // Text to be displayed by the tooltip.
  @Input() tooltipText: string;
  // This needs only a field name from the model.
  // It's necessary to create the chart but serves no other purpose.
  @Input() categoryField: string;
  chart: any;
  constructor(){}

  ngAfterViewInit() {
    this.initChart();
  }
  initChart() {
    this.addFakeValues();
    this.chart = am4core.create(this.chartElem.nativeElement, am4charts.XYChart);
    this.chart.data = this.chartData;
    this.chart.contentValign = 'middle';
    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.autoCenter = true;
    categoryAxis.renderer.hide();
    categoryAxis.dataFields.category = 'campaign';

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.hidden = true;

    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'fakeValue';
    series.dataFields.categoryX = this.categoryField;
    series.align = 'center';
    series.strokeWidth = '2';
    series.stroke = am4core.color('#7f8b93');

    const bullet = series.bullets.push(new am4charts.CircleBullet());
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.getFillFromObject = false;
    series.tooltip.fill = am4core.color('#000');
    series.tooltip.autoTextColor = false;
    series.tooltip.label.fill = am4core.color('#000');
    series.tooltip.fontSize = 10;
    bullet.tooltipText = this.tooltipText;
    bullet.fill = am4core.color('#7f8b93');
    bullet.strokeWidth = 2;

    // this.chart.padding(40, 40, 40, 40);
    this.chart.svgContainer.htmlElement.style.height = '200px';
  }

  addFakeValues() {
    this.chartData = this.chartData.map((elem: object) => {
      const newObj = { fakeValue: 0 };
      return Object.assign(newObj, elem);
    });
  }
}