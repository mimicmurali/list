import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SecComponent } from './sec/sec.component';
 const routes: Routes = [
  // {path:'myList', component:ListComponent},
  // {path:'sec', component:SecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[ListComponent,SecComponent]