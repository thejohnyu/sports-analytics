import { TestBed } from '@angular/core/testing';
import { SportsDataService } from './sports-data.service';

describe('SportsDataService', () => {
  let service: SportsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsDataService);
  });

  it('should return advanced stats for NBA', (done) => {
    service.getAdvancedStats('NBA').subscribe(stats => {
      expect(stats.length).toBeGreaterThan(0);
      done();
    });
  });
});
