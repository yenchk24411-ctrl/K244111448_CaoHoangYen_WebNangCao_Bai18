import { Component, OnInit, signal } from '@angular/core';
import { CustomerGroup } from '../classes/ICustomer';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrl: './group-customers.css',
})
export class GroupCustomers implements OnInit {
  customerGroups = signal<CustomerGroup[]>([]);

  constructor(private _service: CustomerService) {}

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups.set(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}