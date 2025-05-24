import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MediaService } from '../../../core/services/media.service';
import { PageViewComponent } from '../../../shared/components/page-view/page-view.component';
import { MediaEntity } from '../../../core/models/types';
import { MediaCardComponent } from '../../../shared/components/media-card/media-card.component';

@Component({
  selector: 'app-media',
  imports: [PageViewComponent, MediaCardComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  protected media: MediaEntity[] = [];
  protected errorMessage: string | null = '';

  ngOnInit(): void {
    this.mediaService.findAll().subscribe({
      next: (data) => {
        console.log(data.payload)
        this.media = data.payload;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Component caught error:', err);
        this.errorMessage = 'Failed to load media. Please try again later.';
      },
    });
  }
}
