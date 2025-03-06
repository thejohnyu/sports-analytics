import { Component, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Sport, SportService } from '../sport.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Pricing', path: '/pricing' },
    // { label: 'Teams', path: '/teams' },
    // { label: 'Stats', path: '/statistics' },
    // { label: 'Survey', path: '/survey' },
    // { label: 'Calculator', path: '/calculator' },
    // { label: 'Canvas', path: '/canvas' },
  ];

  // Mobile hamburger menu state
  public mobileMenuOpen = false;

  constructor(private router: Router, private sportService: SportService) {}

  ngOnInit(): void {
      this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigate(path: string): void {
    this.router.navigate([path]);
    this.mobileMenuOpen = false;
  }

  onClickHeaderItem() {
    this.mobileMenuOpen = false;
  }
}
