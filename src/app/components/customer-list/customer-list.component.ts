import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
}

