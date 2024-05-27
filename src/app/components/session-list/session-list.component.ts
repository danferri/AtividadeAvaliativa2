// src/app/components/session-list/session-list.component.ts

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.getSessions().subscribe((data: Session[]) => {
      this.sessions = data;
    });
  }
}
