import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-page-view',
  imports: [FooterComponent, HeaderComponent, MatSidenavModule],
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageViewComponent { }
