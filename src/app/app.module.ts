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

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    CustomerListComponent,
    RoomListComponent,
    SessionListComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TmdbService, CustomerService, RoomService, SessionService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

