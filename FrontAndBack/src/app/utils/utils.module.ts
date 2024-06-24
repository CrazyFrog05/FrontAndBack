import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ApiService],
  exports: [],
})
export class UtilsModule {}
