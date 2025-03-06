import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavSubItem {
  label: string;
  route: string;
  external?: boolean; // Optional property for external links
  iconUrl?: string; // Optional dynamic icon: URL or inline SVG markup (if using [innerHTML])
}

interface NavItem {
  labelMain: string; // e.g., "TanStack"
  labelSub: string; // e.g., "Start"
  route: string; // e.g., "/start"
  status?: string; // e.g., "beta"
  active?: boolean; // true if active
  external?: boolean; // Optional for main nav item if needed
  subItems?: NavSubItem[]; // Optional sub-menu items
  expanded?: boolean; // For accordion toggle effect
  subColor?: string; // Unique color for the sub label
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  navItems: NavItem[] = [
    {
      labelMain: 'Dashboard',
      labelSub: 'View',
      route: '/dashboard',
      active: false,
      expanded: false,
      subColor: '#ff9800',
      subItems: [
        { label: 'Home', route: '/', iconUrl: '../../assets/about-me.png' },
        {
          label: 'Dashboard',
          route: '/dashboard',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Odds',
          route: '/odds',
          iconUrl: '../../assets/8.png',
        },
      ],
    },
    {
      labelMain: 'NBA',
      labelSub: 'View',
      route: '/',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '#00ffff',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'NFL',
      labelSub: 'View',
      route: '/',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '#7ed957',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'MLB',
      labelSub: 'View',
      route: '/',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '	#FF00FF',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'NHL',
      labelSub: 'View',
      route: '/',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '#9FE2BF',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'UFC',
      labelSub: 'View',
      route: '/',
      status: 'beta',
      active: true,
      expanded: false,
      subColor: '#8e44ad',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'ESPORTS',
      labelSub: 'View',
      route: '/',
      status: 'PRO',
      active: true,
      expanded: false,
      subColor: 'red',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'SportCards',
      labelSub: 'View',
      route: '/',
      status: 'PRO',
      active: true,
      expanded: false,
      subColor: 'gold',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    {
      labelMain: 'Sneaker',
      labelSub: 'View',
      route: '/',
      status: 'PRO',
      active: true,
      expanded: false,
      subColor: 'orange',
      subItems: [
        {
          label: 'Odds',
          route: '/start/latest/docs/framework/react/examples/start-basic',
          iconUrl: '../../assets/4.png',
        },
        {
          label: 'Futures',
          route: '/start/latest/docs/framework/react/overview',
          iconUrl: '../../assets/5.png',
        },
        {
          label: 'Ranking',
          route: 'https://github.com/tanstack/router',
          external: true,
          iconUrl: '../../assets/6.png',
        },
      ],
    },
    // Additional nav items can be added here...
  ];

  // Toggle the expanded state for nav items that have subItems
  toggleExpanded(item: NavItem, event: Event): void {
    if (item.subItems && item.subItems.length) {
      event.preventDefault(); // Prevent default navigation if sub-items exist
      item.expanded = !item.expanded;
    }
  }
}
