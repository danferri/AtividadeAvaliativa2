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
      new Customer(1, 1, 'João', 'Silva', 'joao.silva@example.com', true),

    ]);
  }

  getAddresses(): Observable<Address[]> {
    return of([
      new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'),

    ]);
  }

  getEmployees(): Observable<Employee[]> {
    return of([
      new Employee(1, 1, 1, 'Maria', 'Oliveira', 'maria.oliveira@example.com', true, 'senha123'),

    ]);
  }
}

