import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss'],
})
export class Footer2Component {
  @Output()
  openContactDialog = new EventEmitter();
}