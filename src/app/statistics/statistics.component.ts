import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsDataService, TeamStat } from '../sports-data.service';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {
  advancedStats$!: Observable<TeamStat[]>;
  loading = true;

  constructor(private sportsDataService: SportsDataService) {}

  ngOnInit(): void {
    this.advancedStats$ = this.sportsDataService.getAdvancedStats('NBA').pipe(
      tap(() => this.loading = false)
    );
  }
}
