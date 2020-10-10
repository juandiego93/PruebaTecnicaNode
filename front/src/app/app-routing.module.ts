import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CorralesComponent } from './components/corrales/corrales.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalComponent } from './components/animal/animal.component';
import { CorralComponent } from './components/corral/corral.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'corrales', component: CorralesComponent },
  { path: 'corral/:id', component: CorralComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: 'animal/:id', component: AnimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
