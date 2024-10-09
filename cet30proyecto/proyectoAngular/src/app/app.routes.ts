import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { GaleryComponent } from './views/galery/galery.component';
import { ProductsComponent } from './views/products/products.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'galery',component:GaleryComponent},
    {path:'products',component:ProductsComponent},
];
