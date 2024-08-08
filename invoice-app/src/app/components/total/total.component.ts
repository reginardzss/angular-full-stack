import { Component, Input } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
})
export class TotalComponent {
  @Input() total: number = 0;
}
