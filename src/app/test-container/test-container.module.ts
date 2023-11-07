import { NgModule } from '@angular/core';

import { TestContainerComponent } from './test-container.component';
import { TestContainerRoutes } from './test-container-routes.module';
import { TestRoute1Component } from './test-route-1/test-route-1.component';
import { TestRoute2Component } from './test-route-2/test-route-2.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TestContainerEffects } from '../../store/effects/test-container.effect';
import { reducer } from '../../store/reducers/test-container.reducer';

@NgModule({
  imports: [
    TestContainerRoutes,
    EffectsModule.forFeature([TestContainerEffects]),
    StoreModule.forFeature('testContainer', reducer),
  ],
  exports: [],
  declarations: [
    TestContainerComponent,
    TestRoute1Component,
    TestRoute2Component,

  ],
  providers: [],
})
export class TestContainerModule { }
