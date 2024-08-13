import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() items: CartItem[] = [];
  @Output() openEventEmitter = new EventEmitter();

  setOpenCart(): void{
    this.openEventEmitter.emit();
  }

}
