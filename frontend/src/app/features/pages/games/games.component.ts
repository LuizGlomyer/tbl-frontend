import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent { }
