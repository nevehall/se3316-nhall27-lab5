import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CommonService } from './service/common.service';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { ManagerComponent } from './manager/manager.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { AddDcmaComponent } from './add-dcma/add-dcma.component';
import { ShowDcmaComponent } from './show-dcma/show-dcma.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DcmaPolicyComponent } from './dcma-policy/dcma-policy.component';




@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    AboutUsComponent,
    CatalogueComponent,
    BestSellersComponent,
    HomeComponent,
    ShowProductComponent,
    AddProductComponent,
    CartComponent,
    ShowCartComponent,
    ManagerComponent,
    AddReviewComponent,
    ShowReviewComponent,
    AddDcmaComponent,
    ShowDcmaComponent,
    PrivacyComponent,
    DcmaPolicyComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
