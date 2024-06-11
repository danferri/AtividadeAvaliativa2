import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  private roomsList: Room[];
  private roomCurrentId: number;

  constructor() {
    this.roomsList = [
      new Room('Sala 1', 100).setId(1),
      new Room('Sala 2', 150).setId(2),
    ];

    this.roomCurrentId = this.roomsList.length + 1;
  }

  getRooms(): Observable<Room[]> {
    return of(this.roomsList);
  }

  addRoom(room: Room) {
    room.setId(this.roomCurrentId++);

    this.roomsList.push(room);
  }
}
