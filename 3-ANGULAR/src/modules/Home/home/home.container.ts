import { Component } from '@angular/core';
import { fadeInOutAndSlideFromBottomAnimation } from './animations';

@Component({
  selector: 'home-container',
  templateUrl: 'home.container.html',
  styleUrls: ['home.container.scss'],
  animations: [fadeInOutAndSlideFromBottomAnimation],
})
export class homeContainerComponent {}
