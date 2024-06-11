import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { TmdbService } from './services/tmdb.service';
import { CustomerService } from './services/customer.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { RoomService } from './services/room.service';
import { SessionService } from './services/session.service';
import { TicketService } from './services/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { SessionFormComponent } from './components/session-form/session-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    CustomerListComponent,
    RoomListComponent,
    SessionListComponent,
    TicketListComponent,
    CustomerFormComponent,
    RoomFormComponent,
    SessionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TmdbService, CustomerService, RoomService, SessionService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

