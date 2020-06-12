import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BureauComponent} from './bureau/bureau.component';


const routes: Routes = [
  {path: '', component: BureauComponent},
  {path: '**', component: BureauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
