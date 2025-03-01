import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fallback',
  standalone: true,
  imports: [],
  templateUrl: './fallback.component.html',
  styleUrl: './fallback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FallbackComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
