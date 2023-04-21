import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: AllProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/:slug', component: SingleProjectComponent },
  // PUT IT AT THE END, ELSE WON'T WORK WITH DYNAMIC ROUTES
  { path: '**', component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
