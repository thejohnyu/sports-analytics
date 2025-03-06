import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import Chart from 'chart.js/auto';

interface ChartConfig {
  type: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  meta: string[]; // meta tags for filtering
}

interface Metric {
  label: string;
  value: number | string;
  data: number[]; // data for mini chart
  type: string; // 'line' or 'doughnut'
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {
  // Filter toolbar options
  filterOptions: string[] = [
    'Select All',
    'High ROI',
    'Trending',
    'Recent',
    'Popular',
    'Upset Alert',
    'Fade The Public',
    'Double Digit Dogs',
    'Bye Week',
  ];
  selectedFilters: string[] = ['Select All'];

  // Array of 12 chart configurations with mock meta data
  chartConfigs: ChartConfig[] = [
    {
      type: 'line',
      title: 'Wins & Losses Trend',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Wins',
            data: [10, 15, 12, 18, 20, 25],
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['High ROI', 'Trending'],
    },
    {
      type: 'bar',
      title: 'Betting Odds Trend',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Odds',
            data: [-110, -115, -112, -118, -120, -117],
            backgroundColor: '#ff9800',
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Recent', 'Popular'],
    },
    {
      type: 'pie',
      title: 'Market Share',
      data: {
        labels: ['Team A', 'Team B', 'Team C'],
        datasets: [
          {
            label: 'Market Share',
            data: [30, 50, 20],
            backgroundColor: ['#f44336', '#2196f3', '#4caf50'],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['High ROI', 'Popular'],
    },
    {
      type: 'doughnut',
      title: 'User Distribution',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
          {
            label: 'Users',
            data: [60, 30, 10],
            backgroundColor: ['#ff9800', '#4caf50', '#2196f3'],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Trending', 'Recent'],
    },
    {
      type: 'radar',
      title: 'Performance Metrics',
      data: {
        labels: ['Speed', 'Reliability', 'Scalability', 'Design', 'Support'],
        datasets: [
          {
            label: 'Performance',
            data: [80, 90, 70, 85, 75],
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            pointBackgroundColor: '#2196f3',
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['High ROI', 'Recent'],
    },
    {
      type: 'polarArea',
      title: 'Risk Analysis',
      data: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [
          {
            label: 'Risk',
            data: [40, 25, 20, 15],
            backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800', '#f44336'],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Trending'],
    },
    {
      type: 'line',
      title: 'Monthly Revenue',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [2000, 2500, 2200, 2700, 3000, 3200],
            borderColor: '#673ab7',
            backgroundColor: 'rgba(103, 58, 183, 0.2)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Popular', 'High ROI'],
    },
    {
      type: 'bar',
      title: 'Quarterly Growth',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Growth',
            data: [5, 10, 15, 20],
            backgroundColor: '#009688',
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Recent'],
    },
    {
      type: 'line',
      title: 'Active Users Trend',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Active Users',
            data: [500, 750, 600, 800],
            borderColor: '#e91e63',
            backgroundColor: 'rgba(233, 30, 99, 0.2)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Trending', 'Popular'],
    },
    {
      type: 'bar',
      title: 'Conversion Rate',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Conversion',
            data: [2.5, 3, 2.8, 3.2, 3.5, 3.8],
            backgroundColor: '#ff5722',
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Recent', 'High ROI'],
    },
    {
      type: 'pie',
      title: 'Traffic Sources',
      data: {
        labels: ['Organic', 'Paid', 'Referral', 'Social'],
        datasets: [
          {
            label: 'Traffic',
            data: [40, 30, 20, 10],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0'],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Popular'],
    },
    {
      type: 'doughnut',
      title: 'Feature Usage',
      data: {
        labels: ['Dashboard', 'Analytics', 'Reports', 'Alerts'],
        datasets: [
          {
            label: 'Usage',
            data: [35, 25, 25, 15],
            backgroundColor: ['#3f51b5', '#03a9f4', '#8bc34a', '#ffc107'],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
      meta: ['Trending', 'High ROI'],
    },
  ];

  // Metrics array with mini chart data
  metrics = [
    {
      label: 'Wins',
      value: 60,
      type: 'line',
      data: [0, 15, 12, 18, 20, 25],
    },
    {
      label: 'Losses',
      value: 40,
      data: [0, -8, -7, -9, -8, -10],
      type: 'line',
    },
    { label: 'Winrate %', value: '60%', data: [60, 40], type: 'doughnut' },
  ];

  // Query all main chart canvases
  @ViewChildren('chartCanvas') chartCanvases!: QueryList<
    ElementRef<HTMLCanvasElement>
  >;
  // Query all mini chart canvases for metrics
  @ViewChildren('miniChart') miniCharts!: QueryList<
    ElementRef<HTMLCanvasElement>
  >;

  ngAfterViewInit(): void {
    // Render main charts based on filtered chart configurations
    this.chartCanvases.forEach((canvasRef, index) => {
      const config = this.filteredChartConfigs[index];
      if (config) {
        const ctx = canvasRef.nativeElement.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: config.type as any,
            data: config.data,
            options: config.options,
          });
        }
      }
    });

    // Render mini charts for metrics
    this.miniCharts.forEach((canvasRef, index) => {
      const metric = this.metrics[index];
      const ctx = canvasRef.nativeElement.getContext('2d');
      if (ctx && metric) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let miniConfig: any;
        if (metric.type === 'line') {
          miniConfig = {
            type: 'line',
            data: {
              labels: metric.data.map((_, i) => `Week ${i + 1}`),
              datasets: [
                {
                  label: metric.label,
                  data: metric.data,
                  borderColor: metric.label === 'Wins' ? '#4caf50' : '#f44336',
                  backgroundColor: 'rgba(0,0,0,0)',
                  tension: 0.3,
                  fill: false,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: {
                  display: true,
                  grid: {
                    color: 'red',
                    borderColor: 'grey',
                    tickColor: 'grey',
                  },
                },
                y: { display: false },
              },
            },
          };
        } else if (metric.type === 'doughnut') {
          miniConfig = {
            type: 'doughnut',
            data: {
              labels: ['Win', 'Loss'],
              datasets: [
                {
                  label: metric.label,
                  data: metric.data,
                  backgroundColor: ['#4caf50', '#f44336'],
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
            },
          };
        }
        new Chart(ctx, miniConfig);
      }
    });
  }

  // Filter: if "Select All" is checked, return all chart configurations
  get filteredChartConfigs(): ChartConfig[] {
    if (this.selectedFilters.includes('Select All')) {
      return this.chartConfigs;
    }
    return this.chartConfigs.filter((config) =>
      config.meta.some((tag) => this.selectedFilters.includes(tag))
    );
  }

  toggleFilter(option: string): void {
    if (option === 'Select All') {
      if (!this.selectedFilters.includes('Select All')) {
        this.selectedFilters = ['Select All'];
      } else {
        this.selectedFilters = [];
      }
    } else {
      this.selectedFilters = this.selectedFilters.filter(
        (f) => f !== 'Select All'
      );
      if (this.selectedFilters.includes(option)) {
        this.selectedFilters = this.selectedFilters.filter((f) => f !== option);
      } else {
        this.selectedFilters.push(option);
      }
    }
  }
}
