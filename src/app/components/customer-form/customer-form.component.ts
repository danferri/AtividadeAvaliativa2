import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})

export class CustomerFormComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      primeiro_nome: ["", Validators.required],
      ultimo_nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      ativo: [true, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.customerForm.valid) {
      const newCustomerValues = this.customerForm.value;
      const newCustomer: Customer = new Customer(null, newCustomerValues.primeiro_nome, newCustomerValues.ultimo_nome, newCustomerValues.email, newCustomerValues.ativo);
      
      this.customerService.addCustomer(newCustomer);
      this.customerForm.reset();
    }
  }
}
