/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  // Example nav items – you can also import these from your NavComponent if desired.
  navItems:any = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Pricing', path: '/pricing' }
  ];

  mobileMenuOpen = false;
  scrolled = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // When page is scrolled more than 5px, mark as scrolled
    this.scrolled = window.pageYOffset > 5;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigate(path: string): void {
    this.mobileMenuOpen = false;
    this.router.navigate([path]);
  }

  onClickHeaderItem(): void {
    // Additional actions on nav click, if needed.
  }
}
