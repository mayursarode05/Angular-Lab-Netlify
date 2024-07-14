import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { MatComponentComponent } from './components/mat-component/mat-component.component';
import { ExampleComponent } from './components/behavior-subject/behavior-subject.component';
import { EventListenerComponent } from './components/event-listener/event-listener.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    {path:'reactive-form',component:ReactiveFormComponent},
    {path:'mat-component',component:MatComponentComponent},
    {path:'BehaviorSubject',component:ExampleComponent},
    {path:'event-listner',component:EventListenerComponent},
    {path:'home',
        loadChildren:() => import('./components/home/home.module').then(x => x.HomeModule)
    }
];
