import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private RoomsList: Room[];

  constructor() {
    this.RoomsList = [
      new Room(1, 'Sala 1', 100),
      new Room(2, 'Sala 2', 150),
    ];
  }

  getRooms(): Observable<Room[]> {
    return of(this.RoomsList);
  }
}
