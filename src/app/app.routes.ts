import { Routes } from '@angular/router';

import { Home } from './view/home/home';

import { SelectorFires } from './view/selector-fires/selector-fires';

import { Favorites } from './view/favorites/favorites';

import { FairDetail } from './view/fair-detail/fair-detail';

import { PageNotFound } from './view/page-not-found/page-not-found';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: Home
    },

    {
        path: 'selector',
        component: SelectorFires
    },

    {
        path: 'preferides',
        component: Favorites
    },

    {
        path: 'fira/:id',
        component: FairDetail
    },

    {
        path: '**',
        component: PageNotFound
    }

];