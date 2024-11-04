import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ReservationRepository {
 private reservations: Reservation[] = [];
 private categories: string[] = [];
 constructor(private dataSource: RestDataSource) {

 dataSource.getReservations().subscribe(data => {
 this.reservations = data;
 this.categories = data.map(p => p.category ?? "(None)")
 .filter((c, index, array) => array.indexOf(c) == index).sort();
 });
 }
 getReservations(category?: string): Reservation[] {
 return this.reservations
 .filter(p => category == undefined || category == p.category);
 }
 getProduct(id: number): Reservation | undefined {
 return this.reservations.find(p => p.id == id);
 }
 getCategories(): string[] {
 return this.categories;
 }

 saveProduct(reservation: Reservation) {
    if (reservation.id == null || reservation.id == 0) {
    this.dataSource.saveReservation(reservation)
    .subscribe(p => this.reservations.push(p));
    } else {
    this.dataSource.updateReservation(reservation)
    .subscribe(p => {
    this.reservations.splice(this.reservations.
    findIndex(p => p.id == reservation.id), 1, reservation);
    });
    }
    }

 deleteReservation(id: number) {
    this.dataSource.deleteReservation(id).subscribe(p => {
    this.reservations.splice(this.reservations.
    findIndex(p => p.id == id), 1);
    })
    }

}