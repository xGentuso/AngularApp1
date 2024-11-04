import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from "./booking/conservation.module";

import { ConservationComponent } from "./booking/conservation.component";
import { CheckoutComponent } from "./booking/checkout.component";
import { CartDetailComponent } from "./booking/cartDetail.component";
import { RouterModule } from "@angular/router";

import { authGuard } from "./auth.guard";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule,
  RouterModule.forRoot([
  {
  path: "conservation", component: ConservationComponent,
  canActivate: [authGuard]
  },
  {
  path: "cart", component: CartDetailComponent,
  canActivate: [authGuard]
  },
  {
  path: "checkout", component: CheckoutComponent,
  canActivate: [authGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module")
    .then(m => m.AdminModule),
    canActivate: [authGuard]
    },
  { path: "**", redirectTo: "/conservation" }
  ])],
  providers: [authGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
