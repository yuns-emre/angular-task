import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    {
        path: 'home', loadChildren: () => import('./ui/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard],
    },
    { path: 'auth', loadChildren: () => import('./ui/auth/auth.module').then(m => m.AuthModule), },
];
