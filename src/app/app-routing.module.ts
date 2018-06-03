import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MouseListComponent } from './components/mouse-list/mouse-list.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { AddMouseComponent } from './components/add-mouse/add-mouse.component';
import { EditMouseComponent } from './components/edit-mouse/edit-mouse.component';
import { RemoveMouseComponent } from './components/remove-mouse/remove-mouse.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mouse-list', component: MouseListComponent},
  {path: 'mouse/:id', component: MouseComponent},
  {path: 'add-mouse', component: AddMouseComponent},
  {path: 'edit-mouse/:id', component: EditMouseComponent},
  {path: 'remove-mouse/:id', component: RemoveMouseComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
