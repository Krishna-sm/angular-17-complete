import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostpageComponent } from './pages/postpage/postpage.component';
import { PerpostpageComponent } from './pages/perpostpage/perpostpage.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent,
        title:'Home Page'
    },
    {
        path:'about',
        component:AboutpageComponent,
        title:'About Page'
    },
    {
        path:'post',
        component:PostpageComponent,
        title:'Post Page'
    },
    {
        path:'post/:id',
        component:PerpostpageComponent,
        title:'Per Post Page'
    },
    {
        path:'contact',
        component:ContactComponent,
        title:'Contact Page'
    }
];
