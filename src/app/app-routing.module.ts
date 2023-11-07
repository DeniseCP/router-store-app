import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'redeem',
  loadChildren: () => import('./test-container/test-container.module').then(m => m.TestContainerModule)},
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
