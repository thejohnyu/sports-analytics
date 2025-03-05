import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Docs', path: '/docs' },
    { label: 'Blog', path: '/blog' },
    { label: 'Community', path: '/community' },
    { label: 'About', path: '/about' }
  ];
}
