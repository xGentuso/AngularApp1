import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
 private reservations: Reservation[] = [
 new Reservation(1, "Reservation 1", "Category 1", "Reservation 1 (Category 1)", 100),
 new Reservation(2, "Reservation 2", "Category 1", "Reservation 2 (Category 1)", 100),
 new Reservation(3, "Reservation 3", "Category 1", "Reservation 3 (Category 1)", 100),
 new Reservation(4, "Reservation 4", "Category 1", "Reservation 4 (Category 1)", 100),
 new Reservation(5, "Reservation 5", "Category 1", "Reservation 5 (Category 1)", 100),
 new Reservation(6, "Reservation 6", "Category 2", "Reservation 6 (Category 2)", 100),
 new Reservation(7, "Reservation 7", "Category 2", "Reservation 7 (Category 2)", 100),
 new Reservation(8, "Reservation 8", "Category 2", "Reservation 8 (Category 2)", 100),
 new Reservation(9, "Reservation 9", "Category 2", "Reservation 9 (Category 2)", 100),
 new Reservation(10, "Reservation 10", "Category 2", "Reservation 10 (Category 2)", 100),
 new Reservation(11, "Reservation 11", "Category 3", "Reservation 11 (Category 3)", 100),
 new Reservation(12, "Reservation 12", "Category 3", "Reservation 12 (Category 3)", 100),
 new Reservation(13, "Reservation 13", "Category 3", "Reservation 13 (Category 3)", 100),
 new Reservation(14, "Reservation 14", "Category 3", "Reservation 14 (Category 3)", 100),
 new Reservation(15, "Reservation 15", "Category 3", "Reservation 15 (Category 3)", 100),
 ];
 getProducts(): Observable<Reservation[]> {
 return from([this.reservations]);
 }

 saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
    }
}
