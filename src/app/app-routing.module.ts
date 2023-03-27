import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImoveisComponent} from "./imoveis/imoveis.component";

const routes: Routes = [
  {path: '', component: ImoveisComponent},
  {path: 'imoveis', component: ImoveisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
