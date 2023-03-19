import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectComponent } from './pages/project/project.component';
import { FooterNextComponent } from './components/footer-next/footer-next.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProjectReducer } from './util/state/projects.reducuers';
import { ROOT_REDUCERS } from './util/state/app.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HeroComponent,
		ProjectsComponent,
		FooterComponent,
		HomeComponent,
		ErrorComponent,
		ProjectComponent,
		FooterNextComponent,
		AllProjectsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot(ROOT_REDUCERS),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([]),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
