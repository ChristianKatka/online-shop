import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-media-select',
  templateUrl: 'media-select.component.html',
  styleUrls: ['media-select.component.scss'],
})
export class MediaSelectComponent {
  @Output()
  mediaSelected: EventEmitter<File> = new EventEmitter();

  onFileSelect(file: File | FileList) {
    if (file instanceof FileList) {
      this.mediaSelected.emit(Array.from(file)[0]);
    } else {
      this.mediaSelected.emit(file);
    }
  }
}
