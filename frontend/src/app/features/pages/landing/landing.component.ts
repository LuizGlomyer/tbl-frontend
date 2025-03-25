import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageViewComponent } from "../../../shared/components/page-view/page-view.component";

@Component({
  selector: 'app-landing',
  imports: [PageViewComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent { }
