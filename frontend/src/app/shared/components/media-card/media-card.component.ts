import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MediaTypePipe } from '../../pipes/media-type.pipe';
import { MediaEntity } from '../../../core/models/types';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media-card',
  imports: [MatCardModule, MediaTypePipe, MatRippleModule, RouterLink],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent {
  @Input() public media: MediaEntity | undefined;
}
