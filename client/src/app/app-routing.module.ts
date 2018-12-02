import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent},
    { path: 'bestSellers', component: BestSellersComponent},
    { path: 'catalogue', component: CatalogueComponent}
  
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
