import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  private ticketsList: Ticket[];

  constructor() {
    this.ticketsList = [
      new Ticket(1, 1, 1),
      new Ticket(2, 2, 2),
    ];
  }

  getTickets(): Observable<Ticket[]> {
    return of(this.ticketsList);
  }

  addTicket(ticket: Ticket) {
    this.ticketsList.push(ticket);
  }
}
