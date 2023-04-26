import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app-container',
  templateUrl: 'my-app-container.html',
})
export class MyAppContainerComponent {
  @Input()
  width = '90%';
}
