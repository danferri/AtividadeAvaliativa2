// src/app/services/data.service.ts

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

  // Método para obter clientes simulados
  getCustomers(): Observable<Customer[]> {
    return of([
      new Customer(1, 1, 'João', 'Silva', 'joao.silva@example.com', true),
      // Adicione mais clientes simulados conforme necessário
    ]);
  }

  // Método para obter endereços simulados
  getAddresses(): Observable<Address[]> {
    return of([
      new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'),
      // Adicione mais endereços simulados conforme necessário
    ]);
  }

  // Método para obter funcionários simulados
  getEmployees(): Observable<Employee[]> {
    return of([
      new Employee(1, 1, 1, 'Maria', 'Oliveira', 'maria.oliveira@example.com', true, 'senha123'),
      // Adicione mais funcionários simulados conforme necessário
    ]);
  }
}

