import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private CustomersList: Customer[];
  private AddressesList: Address[];
  private EmployeesList: Employee[];

  constructor() {
    this.CustomersList = [
      new Customer(1, 1, 'Dan', 'Nameless', 'dan@dan.com.br', true),
      new Customer(2, 2, 'João', 'Keilo', 'keilo@keilo.com.br', true),
      new Customer(3, 3, 'TonyTony', 'Chopper', 'tony@tont.com.br', true)  
    ];

    this.AddressesList = [
      new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'),

    ];

    this.EmployeesList = [
      new Employee(1, 1, 1, 'Maria', 'Oliveira', 'maria.oliveira@example.com', true, 'senha123'),

    ];
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.CustomersList);
  }

  getAddresses(): Observable<Address[]> {
    return of(this.AddressesList);
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.EmployeesList);
  }
}

