import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { MainPage } from './main-page/main-page';
import { Section } from './main-page/main/section/section';

export const routes: Routes = [
    { path: "", component: WelcomePage },
    { path: "main", component: MainPage, children: [
        { path: "", redirectTo: "section/breakfast", pathMatch: "full" },
        { path: "section/:section", component: Section }
    ] }
];
