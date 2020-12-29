import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { LineChartExampleComponent } from "./line-chart-example/line-chart-example.component";
import { LineChartComponent } from "./line-chart/line-chart.component";

const routes: Routes = [
  { path: 'sc-line-chart', component: LineChartExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LineChartExampleComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
