import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() avatarMenuOpen = false;
  @Output() avatarMenuToggle = new EventEmitter<void>();
}
