import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Reservation } from "./reservation.model";
import { Order } from "./order.model";
import { HttpHeaders } from '@angular/common/http';


const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

 baseUrl: string;
 auth_token?: string;

 constructor(private http: HttpClient) {
 this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
 }

 getReservations(): Observable<Reservation[]> {
 return this.http.get<Reservation[]>(this.baseUrl + "reservations");
 }

 saveOrder(order: Order): Observable<Order> {
 return this.http.post<Order>(this.baseUrl + "orders", order);
 }

 authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
    name: user, password: pass
    }).pipe(map(response => {
    this.auth_token = response.success ? response.token : null;
    return response.success;
    }));
}

saveReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.baseUrl + "reservations",
        reservation, this.getOptions());
    }

    updateReservation(reservation: Reservation): Observable<Reservation> {
        return this.http.put<Reservation>(`${this.baseUrl}reservations/${reservation.id}`,
            reservation, this.getOptions());
        }

        deleteReservation(id: number): Observable<Reservation> {
        return this.http.delete<Reservation>(`${this.baseUrl}reservations/${id}`,
        this.getOptions());
        }

        getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
        }

        deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,
        this.getOptions());
        }

        updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,
        order, this.getOptions());
        }
        
        private getOptions() {
        return {
        headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
        })
        }
        }

}