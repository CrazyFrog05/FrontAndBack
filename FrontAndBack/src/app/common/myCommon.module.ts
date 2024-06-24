import { NgModule } from '@angular/core';
import { MyLetDirective } from './myLet.directive';


@NgModule({
  imports: [],
  declarations: [MyLetDirective],
  providers: [
    MyLetDirective,
  ],
  exports: [MyLetDirective],
})
export class MyCommonModule {}
