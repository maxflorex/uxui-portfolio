import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects-home/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterNextComponent } from './components/footer-next/footer-next.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './util/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffect } from './util/state/project-state/projects.effects';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { AboutComponent } from './pages/about/about.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HeroComponent,
		ProjectsComponent,
		FooterComponent,
		HomeComponent,
		ErrorComponent,
		FooterNextComponent,
		SingleProjectComponent,
		AllProjectsComponent,
		ContactModalComponent,
		ImageModalComponent,
  AboutComponent,
  BottomComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot(ROOT_REDUCERS),
		// StoreModule.forRoot({
		// 	estadoDeProjects: ProjectReducer
		// }),
		StoreDevtoolsModule.instrument({ name: 'TEST' }),
		EffectsModule.forRoot([ProjectEffect]),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
