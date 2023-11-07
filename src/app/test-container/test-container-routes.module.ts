import { RouterModule, Routes } from '@angular/router';
import { TestRoute1Component } from './test-route-1/test-route-1.component';
import { TestRoute2Component } from './test-route-2/test-route-2.component';
import { TestContainerComponent } from './test-container.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: TestContainerComponent,
    children: [
      { path: ':id/test-route-1', component: TestRoute1Component },
      { path: 'test-route-2', component: TestRoute2Component },
      { path: 'test-route-1', redirectTo: '404' },
      { path: '404', component: PageNotFoundComponent}
    ]
  }
];

export const TestContainerRoutes = RouterModule.forChild(routes);
