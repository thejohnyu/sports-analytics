import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

export interface Team {
  name: string;
  sport: string;
  wins: number;
  losses: number;
}

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
    imports: [DragDropModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  ngOnInit(): void {
    this.teams = [
      { name: 'New England Patriots', sport: 'NFL', wins: 14, losses: 2 },
      { name: 'Kansas City Chiefs', sport: 'NFL', wins: 12, losses: 4 },
      { name: 'Green Bay Packers', sport: 'NFL', wins: 11, losses: 5 },
      { name: 'Dallas Cowboys', sport: 'NFL', wins: 10, losses: 6 },
      { name: 'Los Angeles Lakers', sport: 'NBA', wins: 50, losses: 32 },
      { name: 'Golden State Warriors', sport: 'NBA', wins: 48, losses: 34 },
      { name: 'Milwaukee Bucks', sport: 'NBA', wins: 55, losses: 27 },
      { name: 'Boston Celtics', sport: 'NBA', wins: 47, losses: 35 },
      { name: 'New York Yankees', sport: 'MLB', wins: 100, losses: 62 },
      { name: 'Los Angeles Dodgers', sport: 'MLB', wins: 106, losses: 56 },
      { name: 'Chicago Cubs', sport: 'MLB', wins: 95, losses: 67 },
      { name: 'San Francisco Giants', sport: 'MLB', wins: 90, losses: 72 },
    ];
  }

  drop(event: CdkDragDrop<Team[]>): void {
    moveItemInArray(this.teams, event.previousIndex, event.currentIndex);
  }
}
