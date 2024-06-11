import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private CustomersList: Customer[];

  constructor() {
    this.CustomersList = [
      new Customer(1, new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'), 'Dan', 'Nameless', 'dan@dan.com.br', true),
      new Customer(2, new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'), 'João', 'Keilo', 'keilo@keilo.com.br', true),
      new Customer(3, new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'), 'TonyTony', 'Chopper', 'tony@tont.com.br', true),
    ];
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.CustomersList);
  }

  addCustomer(customer: Customer) {
    this.CustomersList.push(customer);
  }
}

