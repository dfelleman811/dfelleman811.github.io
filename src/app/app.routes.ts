import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "about",
        component: AboutMeComponent
    },
    {
        path: "home",
        component: HomePageComponent
    }, 
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
