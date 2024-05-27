// src/app/components/room-list/room-list.component.ts

import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }
}

