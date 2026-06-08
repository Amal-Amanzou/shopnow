import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutForm: FormGroup;
  paymentForm: FormGroup;
  currentStep = 2;

  constructor(
    private fb: FormBuilder,
    public cartService: CartService,
    private orderService: OrderService,
    public router: Router   // ✅ CORRIGÉ (public)
  ) {

    this.checkoutForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.paymentForm = this.fb.group({
      method: ['LIVRAISON', Validators.required],
      cardNumber: [''],
      cardName: [''],
      cardExpiry: [''],
      cardCvc: ['']
    });

    // ✅ Gestion dynamique des validateurs
    this.paymentForm.get('method')?.valueChanges.subscribe(method => {
      const cardFields = ['cardNumber', 'cardName', 'cardExpiry', 'cardCvc'];

      cardFields.forEach(field => {
        const control = this.paymentForm.get(field);

        if (method === 'CARTE') {
          control?.setValidators(Validators.required);
        } else {
          control?.clearValidators();
        }

        control?.updateValueAndValidity();
      });
    });
  }

  // ✅ Signals (Angular moderne)
  cartItems = computed(() => this.cartService.cartItems());
  cartTotal = computed(() => this.cartService.cartTotal());

  // ✅ Étape livraison
  onSubmit() {
    if (this.checkoutForm.valid) {
      this.currentStep = 3;
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }

  // ✅ Confirmation commande
  confirmOrder() {
    if (this.paymentForm.valid) {

      const order: Order = {
        id: 'CMD-' + Math.floor(Math.random() * 1000000),
        date: new Date().toISOString(),
        items: this.cartService.cartItems(),
        total: this.cartService.cartTotal(),
        paymentMethod: this.paymentForm.value.method,
        status: 'En cours de traitement',
        deliveryAddress: this.checkoutForm.value
      };

      this.orderService.addOrder(order);

      // Nettoyage + redirection
      this.cartService.clearCart();
      alert('Commande validée avec succès !');

      this.router.navigate(['/mon-compte']); // ✅ OK maintenant

    } else {
      this.paymentForm.markAllAsTouched();
    }
  }
}