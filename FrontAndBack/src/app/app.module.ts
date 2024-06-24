import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { catalogFeatureKey, catalogReducer } from './store/catalog.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './store/catalog.effects';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(ApiEffects),
    UtilsModule,
    InfrastructureModule,
  ],
  providers: [],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
