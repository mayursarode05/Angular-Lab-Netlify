// Below comment code for NgRx Practical

// import { bootstrapApplication } from '@angular/platform-browser';
// import { importProvidersFrom } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { SignupComponent } from './app/components/signup/signup.component';
// import { LoginComponent } from './app/components/login/login.component';
// import { DashboardComponent } from './app/components/dashboard/dashboard.component';
// import { authReducer } from './app/components/store/reducers/auth.reducer';
// import { AuthEffects } from './app/components/store/effects/auth.effects';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { provideStore } from '@ngrx/store';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { ReactiveFormComponent } from './app/components/reactive-form/reactive-form.component';

// bootstrapApplication(AppComponent, 
//   {
//     providers: [
//       importProvidersFrom(FormsModule),
//       provideRouter([
//         { path: 'signup', component: SignupComponent },
//         { path: 'login', component: LoginComponent },
//         { path: 'dashboard', component: DashboardComponent },
//         // { path: '', redirectTo: 'signup', pathMatch: 'full' },
//         {path:'reactive-form',component:ReactiveFormComponent}
//       ]),
//       provideStore({ auth: authReducer }),
//       provideStoreDevtools({ maxAge: 25 }),
//       provideEffects([AuthEffects]), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
//     ]
//   }
// ).catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
