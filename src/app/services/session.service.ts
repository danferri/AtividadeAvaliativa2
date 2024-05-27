import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getSessions(): Observable<Session[]> {
    return of([
      new Session(1, 1, 1, new Date('2023-05-27T14:00:00')),
      new Session(2, 2, 2, new Date('2023-05-27T17:00:00')),

    ]);
  }
}
