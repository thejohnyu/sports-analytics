import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface TeamData {
  team: string;
  moneyline: string;
  spread: string;
  total: string;
  imageUrl: string;
  opponentType: string; // "Away" or "Home"
}

interface Match {
  date: string;
  time: string;
  away: TeamData;
  home: TeamData;
}

@Component({
    selector: 'app-odds',
    templateUrl: './odds.component.html',
    styleUrls: ['./odds.component.scss'],
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OddsComponent implements OnInit {
  matches: Match[] = [];

  ngOnInit(): void {
    // Create 10 matches with mock data (each match represents 2 rows: away and home)
    this.matches = [
      {
        date: '2025-01-01',
        time: '7:00 PM',
        away: {
          team: 'Lakers',
          moneyline: '-150',
          spread: '+10.5',
          total: '220',
          imageUrl: '../../assets/LAL.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Warriors',
          moneyline: '130',
          spread: '-8.5',
          total: '215',
          imageUrl: '../../assets/GSW.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-02',
        time: '8:00 PM',
        away: {
          team: 'Celtics',
          moneyline: '-120',
          spread: '+5.5',
          total: '210',
          imageUrl: '../../assets/BOS.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Bulls',
          moneyline: '110',
          spread: '-7.5',
          total: '205',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-03',
        time: '9:00 PM',
        away: {
          team: 'Nets',
          moneyline: '-140',
          spread: '+8.0',
          total: '225',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Heat',
          moneyline: '125',
          spread: '-6.5',
          total: '230',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-04',
        time: '7:30 PM',
        away: {
          team: 'Knicks',
          moneyline: '-130',
          spread: '+7.0',
          total: '212',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Spurs',
          moneyline: '115',
          spread: '-9.0',
          total: '218',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-05',
        time: '8:30 PM',
        away: {
          team: 'Raptors',
          moneyline: '-160',
          spread: '+11.0',
          total: '235',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Clippers',
          moneyline: '140',
          spread: '-8.0',
          total: '220',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-06',
        time: '7:15 PM',
        away: {
          team: 'Suns',
          moneyline: '-110',
          spread: '+9.5',
          total: '225',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Mavericks',
          moneyline: '120',
          spread: '-7.0',
          total: '215',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-07',
        time: '7:45 PM',
        away: {
          team: '76ers',
          moneyline: '-130',
          spread: '+6.0',
          total: '210',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Nuggets',
          moneyline: '115',
          spread: '-10.0',
          total: '230',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-08',
        time: '8:15 PM',
        away: {
          team: 'Pelicans',
          moneyline: '-140',
          spread: '+5.5',
          total: '225',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Jazz',
          moneyline: '125',
          spread: '-9.5',
          total: '220',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-09',
        time: '8:45 PM',
        away: {
          team: 'Mavs',
          moneyline: '-150',
          spread: '+8.5',
          total: '218',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Rockets',
          moneyline: '130',
          spread: '-7.5',
          total: '215',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      },
      {
        date: '2025-01-10',
        time: '9:15 PM',
        away: {
          team: 'Hawks',
          moneyline: '-120',
          spread: '+6.5',
          total: '210',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Away'
        },
        home: {
          team: 'Magic',
          moneyline: '110',
          spread: '-8.0',
          total: '205',
          imageUrl: '../../assets/MIN.png',
          opponentType: 'Home'
        }
      }
    ];
  }
}
