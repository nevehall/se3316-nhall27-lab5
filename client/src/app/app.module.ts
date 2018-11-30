import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LogoutComponent } from './logout/logout.component';
//import { MaterialsComponent } from './materials/materials.component';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    AboutUsComponent,
    CatalogueComponent,
    LogoutComponent
    //MaterialsComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [RootComponent]
})
export class AppModule { }
