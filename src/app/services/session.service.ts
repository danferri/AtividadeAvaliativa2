import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  private sessionsList: Session[];
  private currentSessionId: number;

  constructor() {
    this.sessionsList = [
      new Session(1, 1, new Date('2023-05-27T14:00:00')).setId(1),
      new Session(2, 2, new Date('2023-05-27T17:00:00')).setId(2),
    ];

    this.currentSessionId = this.sessionsList.length + 1;
  }

  getSessions(): Observable<Session[]> {
    return of(this.sessionsList);
  }

  addSession(session: Session) {
    session.setId(this.currentSessionId++);

    this.sessionsList.push(session);
  }
}
