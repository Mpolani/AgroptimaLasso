import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphis',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './graphis.component.html',
  styleUrl: './graphis.component.css'
})
export class GraphisComponent {
  public lineChartType: ChartType = 'line';
  public isBrowser: boolean;
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false 
  };
  public lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mayor' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Medio' },
      { data: [18, 38, 30, 29, 76, 37, 60], label: 'Bajo' }
    ]
  };
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
