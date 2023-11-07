import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, combineLatestWith } from 'rxjs/operators';

import { testActions } from '../actions/test-container.action';
import { routerNavigatedAction, routerNavigationAction, routerRequestAction } from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTestId } from '../reducers/test-container.reducer';
//import all requried services or any dependencies

@Injectable()
export class TestContainerEffects {
  constructor(private actions$: Actions, private router: Router, private store: Store) { }

  myTestEffectChangeUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigationAction),
      tap(({ payload }) => {
        console.log('routerNavigatedAction', payload);
        if (payload.routerState.url === '/redeem') {
          this.router.navigate(['redeem', 'YAY', 'test-route-1']).then(() => window.location.reload());
        } else if (payload.routerState.url === '/redeem/test-route-2') {
          this.router.navigate(['redeem', 'test-route-1'], {queryParams: {'sort': 'ASC'}}).then(() => window.location.reload());
        }
      })
    ), { dispatch: false }
  );

  myTestEffect1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigatedAction),
      combineLatestWith(this.store.select(selectTestId)),
      tap(([{payload}, testId]) => {
        if(payload.routerState.url === '/redeem/YAY/test-route-1') {
          this.router.navigate(['redeem', testId, 'test-route-1']).then(() => window.location.reload());
        }
      })
    ), { dispatch: false }
  );
}
