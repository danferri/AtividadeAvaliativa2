import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of([
      new Customer(1, 1, 'Dan', 'Nameless', 'dan@dan.com.br', true),
      new Customer(2, 2, 'João', 'Keilo', 'keilo@keilo.com.br', true),
      new Customer(3, 3, 'TonyTony', 'Chopper', 'tony@tont.com.br', true)  
    ]); 
  }  
  

  getAddresses(): Observable<Address[]> {
    return of([
      new Address(1, 'Love Street', 123, '12345-678', '123-456-7890', 'Sanca City', 'Centro'),

    ]);
  }

  

  getEmployees(): Observable<Employee[]> {
    return of([
      new Employee(1, 1, 1, 'Maria', 'Maria', 'maria@maria.com.br', true, 'senha123'),

    ]);
  }
}

