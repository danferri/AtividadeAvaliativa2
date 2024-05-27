// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { TmdbService } from './services/tmdb.service';
import { DataService } from './services/data.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { RoomService } from './services/room.service';
import { SessionService } from './services/session.service';
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [
    AppComponent,           // Componente principal da aplicação
    MovieListComponent,     // Componente para listar filmes
    CustomerListComponent, 
    RoomListComponent, 
    SessionListComponent, 
    TicketListComponent   // Componente para listar clientes
  ],
  imports: [
    BrowserModule,          // Módulo necessário para rodar a aplicação no navegador
    HttpClientModule        // Módulo para realizar requisições HTTP
  ],
  providers: [TmdbService, DataService, RoomService, SessionService, TicketService],  // Serviços utilizados na aplicação
  bootstrap: [AppComponent]  // Componente que será carregado inicialmente
})
export class AppModule { }

