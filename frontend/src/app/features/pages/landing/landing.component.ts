import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageViewComponent } from '../../../shared/components/page-view/page-view.component';

import { MediaService } from '../../../core/services/media.service';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-landing',
  imports: [PageViewComponent, MatButtonModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    console.log(this.mediaService);
    this.mediaService.findAll().subscribe((data) => {
      console.log(data);
    });
  }
}
