import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavSubItem {
  label: string;
  route: string;
  active?: boolean;
  external?: boolean; // Optional property for sub-items
}

interface NavItem {
  labelMain: string;       // e.g., "TanStack"
  labelSub: string;        // e.g., "Start"
  route: string;           // e.g., "/start"
  status?: string;         // e.g., "beta"
  active?: boolean;        // true if active
  external?: boolean;      // Optional property for main nav item (if needed)
  subItems?: NavSubItem[]; // Optional sub-menu items
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
      labelMain: 'NBA',
      labelSub: 'Start',
      route: '/dashboard',
      status: 'beta',
      active: true,
      // external not used on main nav items if not needed; set if required
      subItems: [
        { label: 'Home', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Dashboard', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Stats', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'NFL',
      labelSub: 'Start',
      route: '/dashboard',
      status: 'beta',
      active: true,
      // external not used on main nav items if not needed; set if required
      subItems: [
        { label: 'Home', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Dashboard', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Stats', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'MLB',
      labelSub: 'Start',
      route: '/dashboard',
      status: 'beta',
      active: true,
      // external not used on main nav items if not needed; set if required
      subItems: [
        { label: 'Home', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Dashboard', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Stats', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'NHL',
      labelSub: 'Start',
      route: '/dashboard',
      status: 'beta',
      active: true,
      // external not used on main nav items if not needed; set if required
      subItems: [
        { label: 'Home', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Dashboard', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Stats', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    {
      labelMain: 'UFC',
      labelSub: 'Start',
      route: '/dashboard',
      status: 'beta',
      active: true,
      // external not used on main nav items if not needed; set if required
      subItems: [
        { label: 'Home', route: '/start/latest/docs/framework/react/examples/start-basic' },
        { label: 'Dashboard', route: '/start/latest/docs/framework/react/overview' },
        { label: 'Stats', route: 'https://github.com/tanstack/router', external: true }
      ]
    },
    // Additional nav items can be added here...
  ];
}
