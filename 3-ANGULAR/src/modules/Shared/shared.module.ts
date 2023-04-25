import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { components, directives, pipes } from '.';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  declarations: [...components, ...pipes, ...directives],
  exports: [...components, ...pipes, ...directives],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}
