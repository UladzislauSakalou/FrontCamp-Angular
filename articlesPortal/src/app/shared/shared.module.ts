import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordFilterPipe } from './pipes/word-filter.pipe';

@NgModule({
  declarations: [
    WordFilterPipe
  ],
  exports: [WordFilterPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
