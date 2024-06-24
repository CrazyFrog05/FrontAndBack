import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../common/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ui-category-card',
  templateUrl: 'ui-category-card.component.html',
  styleUrls: ['ui-category-card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class UiCategoryCardComponent {
  @Input()
  category!: ICategory;

  @Input()
  canEdit: boolean = false;

  @Output()
  select = new EventEmitter<ICategory>();

  @Output()
  delete = new EventEmitter<ICategory>();

  @Output()
  update = new EventEmitter<ICategory>();

  ngOnInit() {
    this.categoryEdit = {...this.category};
  }

  editMode: boolean = false;
  categoryEdit!: ICategory;

  handleSelect() {
    this.select.emit(this.category);
  }

  handleDelete() {
    this.delete.emit(this.category);
  }

  handleEdit() {
    this.categoryEdit = {...this.category};
    this.editMode = true;
  }
  handleEditCancel() {
    this.editMode = false;
  }
  handleUpdate() {
    this.update.emit(this.categoryEdit); 
  }
}
