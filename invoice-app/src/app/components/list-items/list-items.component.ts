import { Component, Input } from '@angular/core';
import { Item } from '../../models/items';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {
  @Input() items: Item[] = [];
  @Input() id!: number;
  @Input() product!: string;
  @Input() price!: number;
  @Input() quantity!: number;

}
