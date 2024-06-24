import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../common/types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ui-product-card',
  templateUrl: 'ui-product-card.component.html',
  styleUrls: ['ui-product-card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UiProductCardComponent {
  @Input()
  product!: IProduct;

  @Input()
  canEdit: boolean = false;

  @Output()
  openCard = new EventEmitter<IProduct>();

  @Output()
  delete = new EventEmitter<IProduct>();

  @Output()
  update = new EventEmitter<IProduct>();

  ngOnInit() {
    this.productEdit = {...this.product};
  }

  handleOpenCard() {
    this.openCard.emit(this.product);
  }

  handleDelete() {
    this.delete.emit(this.product);
  }

  editMode: boolean = false;
  productEdit!: IProduct;

  handleEdit() {
    this.productEdit = {...this.product};
    this.editMode = true;
  }
  handleEditCancel() {
    this.editMode = false;
  }

  handleUpdate() {
    this.update.emit(this.productEdit);
  }
}
