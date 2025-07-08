import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Todo } from './pages/todo/todo';


export const routes: Routes = [
    {
        path:'login',
        component: Login
    }, {
        path: 'register',
        component: Register
    },
    {
        path: 'todo',
        component: Todo
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'

    }

];
