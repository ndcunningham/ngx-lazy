import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDirective } from './lazy.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LazyDirective],
  exports: [LazyDirective]
})
export class NgxLazyModule {}
