import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    AvatarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() openSettings = new EventEmitter<void>();

  onSettingsClick() {
    this.openSettings.emit();
  }
}
