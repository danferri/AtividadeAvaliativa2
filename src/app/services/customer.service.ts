import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customersList: Customer[];
  private currentCustomerId: number;

  constructor() {
    this.customersList = [
      new Customer(null, 'Dan', 'Nameless', 'dan@dan.com.br', true).setId(1),
      new Customer(null, 'João', 'Keilo', 'keilo@keilo.com.br', true).setId(2),
      new Customer(null, 'TonyTony', 'Chopper', 'tony@tont.com.br', true).setId(3),
    ];

    this.currentCustomerId = this.customersList.length + 1;
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.customersList);
  }

  addCustomer(customer: Customer) {
    customer.setId(this.currentCustomerId++);

    this.customersList.push(customer);
  }
}

