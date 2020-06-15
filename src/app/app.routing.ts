import { Routes, RouterModule } from "@angular/router";
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login,pathMatch:'full' },
    { path: AppURL.Login, component: LoginComponent }
];

export const AppRouting = RouterModule.forRoot(RouterLists);