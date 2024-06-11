import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  private TicketsList: Ticket[];

  constructor() {
    this.TicketsList = [
      new Ticket(1, 1, 1),
      new Ticket(2, 2, 2),
    ];
  }

  getTickets(): Observable<Ticket[]> {
    return of(this.TicketsList);
  }
}
