import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface TeamStat {
  team: string;
  wins: number;
  losses: number;
  winPercentage: number;
  moneylineROI: number;
  spreadROI: number;
  totalROI: number;
}

@Injectable({
  providedIn: 'root'
})
export class SportsDataService {
  getAdvancedStats(sport: string): Observable<TeamStat[]> {
    let data: TeamStat[] = [];
    if (sport === 'NBA') {
      data = [
        { team: 'Los Angeles Lakers', wins: 50, losses: 32, winPercentage: 0.61, moneylineROI: 5.2, spreadROI: 4.8, totalROI: 3.7 },
        { team: 'Golden State Warriors', wins: 48, losses: 34, winPercentage: 0.585, moneylineROI: 4.9, spreadROI: 4.5, totalROI: 3.5 },
        { team: 'Milwaukee Bucks', wins: 55, losses: 27, winPercentage: 0.67, moneylineROI: 5.5, spreadROI: 5.0, totalROI: 4.0 },
        { team: 'Boston Celtics', wins: 47, losses: 35, winPercentage: 0.573, moneylineROI: 4.7, spreadROI: 4.3, totalROI: 3.4 }
      ];
    } else if (sport === 'NFL') {
      data = [
        { team: 'New England Patriots', wins: 14, losses: 2, winPercentage: 0.875, moneylineROI: 6.0, spreadROI: 5.5, totalROI: 4.0 },
        { team: 'Kansas City Chiefs', wins: 12, losses: 4, winPercentage: 0.75, moneylineROI: 5.8, spreadROI: 5.3, totalROI: 3.8 }
      ];
    } else if (sport === 'MLB') {
      data = [
        { team: 'New York Yankees', wins: 100, losses: 62, winPercentage: 0.617, moneylineROI: 4.5, spreadROI: 4.0, totalROI: 3.2 },
        { team: 'Los Angeles Dodgers', wins: 106, losses: 56, winPercentage: 0.654, moneylineROI: 4.8, spreadROI: 4.3, totalROI: 3.5 }
      ];
    }
    return of(data).pipe(delay(2000));
  }
}
