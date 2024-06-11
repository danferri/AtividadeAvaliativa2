import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  addCustomer() {
    this.customerService.addCustomer(
      new Customer(1, new Address(1, 'Rua Principal', 123, '12345-678', '123-456-7890', 'Cidade Exemplo', 'Centro'), 'Dan', 'Nameless', 'dan@dan.com.br', true),
    )
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
}

