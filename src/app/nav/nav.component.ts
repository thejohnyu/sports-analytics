import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

interface NavSubItem {
  label: string;
  route: string;
  external?: boolean; // Optional property for sub-items
}

interface NavItem {
  labelMain: string;       // e.g., "TanStack"
  labelSub: string;        // e.g., "Start"
  route: string;           // e.g., "/start"
  status?: string;         // e.g., "beta"
  active?: boolean;        // true if active
  external?: boolean;      // Optional for main nav item if needed
  subItems?: NavSubItem[]; // Optional sub-menu items
  expanded?: boolean;      // For accordion toggle
  subColor?: string;       // Unique color for the sub label
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
    {
      labelMain: 'Home',
      labelSub: 'Start',
      route: '/',
      active: true,
      expanded: false,
      subColor: '#cb1010', // Gold/Brown
      subItems: [
        { label: 'Teams', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Stats', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Odds', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'NBA',
      labelSub: 'View',
      route: '/dashboard',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '#00ffff', // Cyan
      subItems: [
        { label: 'Teams', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Stats', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Odds', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'NFL',
      labelSub: 'View',
      route: '/dashboard',
      status: 'beta',
      active: false,
      expanded: false,
      subColor: '#ff9800', // Orange
      subItems: [
        { label: 'Metrics', route: '/dashboard/metrics' },
        { label: 'Charts', route: '/dashboard/charts' }
      ]
    },
    // Add additional nav items as needed...
  ];

  constructor(private router: Router) {}

  // Toggle the expanded state for nav items that have subItems
  toggleExpanded(item: NavItem, event: Event): void {
    if (item.subItems && item.subItems.length) {
      event.preventDefault(); // Prevent navigation if sub-items exist
      item.expanded = !item.expanded;
    }
  }
}
