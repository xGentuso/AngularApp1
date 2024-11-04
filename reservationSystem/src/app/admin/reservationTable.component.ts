import { Component, IterableDiffer, IterableDiffers } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Reservation } from "../model/reservation.model";
import { ReservationRepository } from "../model/reservation.repository";

@Component({
 templateUrl: "reservationTable.component.html"
})

export class ProductTableComponent {
 colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];

 dataSource = new MatTableDataSource<Reservation>(this.repository.getReservations());

 differ: IterableDiffer<Reservation>;
 
 constructor(private repository: ReservationRepository, differs: IterableDiffers) {
 this.differ = differs.find(this.repository.getReservations()).create();
 }

 ngDoCheck() {
 let changes = this.differ?.diff(this.repository.getReservations());
 if (changes != null) {
 this.dataSource.data = this.repository.getReservations();
 }

 }
 deleteReservation(id: number) {
 this.repository.deleteReservation(id);
 }
}