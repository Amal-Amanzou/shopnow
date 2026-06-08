import { Injectable, signal, computed } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private userOrders = signal<Order[]>(this.loadOrders());

  orders = computed(() => this.userOrders());

  private loadOrders(): Order[] {
    const saved = localStorage.getItem('userOrders');
    return saved ? JSON.parse(saved) : [];
  }

  private saveOrders(): void {
    localStorage.setItem('userOrders', JSON.stringify(this.userOrders()));
  }

  addOrder(order: Order): void {
    const current = this.userOrders();
    this.userOrders.set([order, ...current]); // Prepend new order
    this.saveOrders();
  }
}
