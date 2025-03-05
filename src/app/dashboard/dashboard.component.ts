import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import Chart from 'chart.js/auto';

interface ChartConfig {
  type: string;
  data: any;
  options: any;
  title: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {
  // Array of 12 chart configurations with mock data
  chartConfigs: ChartConfig[] = [
    {
      type: 'line',
      title: 'Wins & Losses Trend',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Wins',
          data: [10, 15, 12, 18, 20, 25],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          tension: 0.3,
          fill: true,
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'bar',
      title: 'Betting Odds Trend',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Odds',
          data: [-110, -115, -112, -118, -120, -117],
          backgroundColor: '#ff9800'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'pie',
      title: 'Market Share',
      data: {
        labels: ['Team A', 'Team B', 'Team C'],
        datasets: [{
          label: 'Market Share',
          data: [30, 50, 20],
          backgroundColor: ['#f44336', '#2196f3', '#4caf50']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'doughnut',
      title: 'User Distribution',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
          label: 'Users',
          data: [60, 30, 10],
          backgroundColor: ['#ff9800', '#4caf50', '#2196f3']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'radar',
      title: 'Performance Metrics',
      data: {
        labels: ['Speed', 'Reliability', 'Scalability', 'Design', 'Support'],
        datasets: [{
          label: 'Performance',
          data: [80, 90, 70, 85, 75],
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          borderColor: '#2196f3',
          pointBackgroundColor: '#2196f3'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'polarArea',
      title: 'Risk Analysis',
      data: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [{
          label: 'Risk',
          data: [40, 25, 20, 15],
          backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800', '#f44336']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'line',
      title: 'Monthly Revenue',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [2000, 2500, 2200, 2700, 3000, 3200],
          borderColor: '#673ab7',
          backgroundColor: 'rgba(103, 58, 183, 0.2)',
          tension: 0.3,
          fill: true
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'bar',
      title: 'Quarterly Growth',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          label: 'Growth',
          data: [5, 10, 15, 20],
          backgroundColor: '#009688'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'line',
      title: 'Active Users Trend',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Active Users',
          data: [500, 750, 600, 800],
          borderColor: '#e91e63',
          backgroundColor: 'rgba(233, 30, 99, 0.2)',
          tension: 0.3,
          fill: true
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'bar',
      title: 'Conversion Rate',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Conversion',
          data: [2.5, 3, 2.8, 3.2, 3.5, 3.8],
          backgroundColor: '#ff5722'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'pie',
      title: 'Traffic Sources',
      data: {
        labels: ['Organic', 'Paid', 'Referral', 'Social'],
        datasets: [{
          label: 'Traffic',
          data: [40, 30, 20, 10],
          backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    },
    {
      type: 'doughnut',
      title: 'Feature Usage',
      data: {
        labels: ['Dashboard', 'Analytics', 'Reports', 'Alerts'],
        datasets: [{
          label: 'Usage',
          data: [35, 25, 25, 15],
          backgroundColor: ['#3f51b5', '#03a9f4', '#8bc34a', '#ffc107']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    }
  ];

  @ViewChildren('chartCanvas') chartCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  ngAfterViewInit(): void {
    // Iterate over each canvas element and its corresponding chart configuration
    this.chartCanvases.forEach((canvasRef, index) => {
      const config = this.chartConfigs[index];
      const ctx = canvasRef.nativeElement.getContext('2d');
      if (ctx && config) {
        new Chart(ctx, {
          type: config.type as any,
          data: config.data,
          options: config.options
        });
      }
    });
  }
}
