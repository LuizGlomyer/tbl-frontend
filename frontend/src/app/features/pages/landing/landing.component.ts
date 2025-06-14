import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageViewComponent } from '../../../shared/components/page-view/page-view.component';

import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-landing',
  imports: [PageViewComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {}
}
