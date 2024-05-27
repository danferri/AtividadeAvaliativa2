import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTickets(): Observable<Ticket[]> {
    return of([
      new Ticket(1, 1, 1),
      new Ticket(2, 2, 2),

    ]);
  }
}
