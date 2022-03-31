import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { StatementComponent } from './statement/statement.component';

//each object inside the routes variable, is a path
export const routes: Routes = [
  { path: '', redirectTo: 'statement', pathMatch: 'full' },//statement page is default
  { path: 'statement', component: StatementComponent },
  { path: 'new-transfer', component: NewTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
