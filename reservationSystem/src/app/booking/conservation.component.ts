import { Component } from "@angular/core";
import { Reservation } from "../model/reservation.model";
import { ReservationRepository } from "../model/reservation.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
 selector: "conservation",
 templateUrl: "conservation.component.html"
})
export class ConservationComponent {
    selectedCategory: string | undefined;
    reservationsPerPage = 4;
    selectedPage = 1;


    constructor(private repository: ReservationRepository,
        private cart: Cart,
        private router: Router) { }

 get reservations(): Reservation[] {
    let pageIndex = (this.selectedPage - 1) * this.reservationsPerPage
 return this.repository.getReservations(this.selectedCategory)
 .slice(pageIndex, pageIndex + this.reservationsPerPage);
 }

 get categories(): string[] {
    return this.repository.getCategories();
    }

changeCategory(newCategory?: string) {
    this.reservationsPerPage = 4;
    this.selectedPage = 1;
    this.selectedCategory = newCategory;
    }

changePage(newPage: number) {
        this.selectedPage = newPage;
        }

changePageSize(newSize: number) {
        this.reservationsPerPage = Number(newSize);
        this.changePage(1);
        }

get pageCount(): number {
            return Math.ceil(this.repository
            .getReservations(this.selectedCategory).length / this.reservationsPerPage)
        }

addReservationToCart(reservation: Reservation) {
            this.cart.addLine(reservation);
            this.router.navigateByUrl("/cart");
        }

}
   