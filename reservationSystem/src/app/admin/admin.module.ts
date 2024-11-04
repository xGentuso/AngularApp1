import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";
import { ProductTableComponent } from "./reservationTable.component";
import { ProductEditorComponent } from "./reservationEditor.component";
import { OrderTableComponent } from "./orderTable.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
        { path: "reservations/:mode/:id", component: ProductEditorComponent },
        { path: "reservations/:mode", component: ProductEditorComponent },
        { path: "reservations", component: ProductTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "reservations" }
        ]
        },
    { path: "**", redirectTo: "auth" }
   ]);
   @NgModule({
    imports: [CommonModule, FormsModule, routing, MaterialFeatures],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent,
        ProductEditorComponent, OrderTableComponent],
    providers: [AuthGuard]
   })
   export class AdminModule { }