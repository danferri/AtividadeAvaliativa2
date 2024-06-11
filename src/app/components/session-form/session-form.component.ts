import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrl: './session-form.component.css'
})

export class SessionFormComponent {
  sessionForm: FormGroup;

  constructor(private fb: FormBuilder, private sessionService: SessionService) {
    this.sessionForm = this.fb.group({
      roomId: ["", Validators.required],
      movieId: ["", Validators.required],
      horario: ["", Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.sessionForm.valid) {
      const newSessionValues = this.sessionForm.value;
      const newSession: Session = new Session(newSessionValues.roomId, newSessionValues.movieId, new Date(newSessionValues.horario));
      
      this.sessionService.addSession(newSession);
      this.sessionForm.reset();
    }
  }
}
