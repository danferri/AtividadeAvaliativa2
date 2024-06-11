import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.css'
})

export class RoomFormComponent {
  roomForm: FormGroup;

  constructor(private fb: FormBuilder, private roomService: RoomService) {
    this.roomForm = this.fb.group({
      nome: ['', Validators.required],
      capacidade: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.roomForm.valid) {
      const newRoomValues = this.roomForm.value;
      const newRoom: Room = new Room(newRoomValues.nome, newRoomValues.capacidade)
      
      this.roomService.addRoom(newRoom);
      this.roomForm.reset();
    }
  }
}
