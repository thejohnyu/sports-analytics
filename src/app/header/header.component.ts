import {
  Component,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Sport, SportService } from '../sport.service';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [AvatarComponent, CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isVisible = true;
  previousScroll: number = window.pageYOffset;
  menuOpen = false;
  avatarMenuOpen = false;
  sports: Sport[] = ['NFL', 'NBA', 'MLB'];
  selectedSport: Sport = 'NFL';

  constructor(private router: Router, private sportService: SportService) {
    this.selectedSport = this.sportService.currentSport;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset;
    this.isVisible = currentScroll === 0 || currentScroll < this.previousScroll;
    this.previousScroll = currentScroll;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    document.body.classList.toggle('app--dark');
  }

  toggleAvatarMenu(): void {
    this.avatarMenuOpen = !this.avatarMenuOpen;
  }

  goToAccount(): void {
    this.router.navigate(['/settings']);
    this.avatarMenuOpen = false;
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
    this.avatarMenuOpen = false;
  }

  onSportChange(newSport: Sport): void {
    this.selectedSport = newSport;
    this.sportService.setSport(newSport);
    this.router.navigate(['/dashboard']);
    this.avatarMenuOpen = false;
  }
}
