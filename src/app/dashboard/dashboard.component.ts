import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const lineCtx = this.lineChartRef.nativeElement.getContext('2d');
    if (lineCtx) {
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5',
            'Week 6',
            'Week 7',
            'Week 8',
            'Week 9',
            'Week 10',
          ],
          datasets: [
            {
              label: 'Wins',
              data: [10, 12, 14, 16, 15, 18, 20, 22, 24, 26],
              borderColor: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.3)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Losses',
              data: [5, 6, 7, 8, 7, 8, 9, 10, 11, 12],
              borderColor: '#f44336',
              backgroundColor: 'rgba(244, 67, 54, 0.3)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: { responsive: true, maintainAspectRatio: false },
      });
    }

    const barCtx = this.barChartRef.nativeElement.getContext('2d');
    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5',
            'Week 6',
            'Week 7',
            'Week 8',
            'Week 9',
            'Week 10',
          ],
          datasets: [
            {
              label: 'Opening Odds',
              data: [
                -110, -112, -115, -113, -118, -110, -112, -115, -117, -120,
              ],
              backgroundColor: '#2196f3',
            },
            {
              label: 'Closing Odds',
              data: [
                -105, -107, -110, -108, -112, -105, -107, -110, -112, -115,
              ],
              backgroundColor: '#ff9800',
            },
          ],
        },
        options: { responsive: true, maintainAspectRatio: false },
      });
    }
  }
}
