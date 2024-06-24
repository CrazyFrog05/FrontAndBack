import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdvertisment } from '../../common/types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-advertisment-card',
  templateUrl: 'ui-advertisment-card.component.html',
  styleUrls: ['ui-advertisment-card.component.css'],
  imports: [
    CommonModule,
    FormsModule,
  ],
  standalone: true,
})
export class UiAdvertismentCardComponent {
  @Input()
  advertisment!: IAdvertisment;

  @Input()
  canEdit: boolean = false;

  @Output()
  delete = new EventEmitter<IAdvertisment>();

  @Output()
  update = new EventEmitter<IAdvertisment>();

  ngOnInit() {
    this.advertismentEdit = {...this.advertisment};
  }

  editMode: boolean = false;
  advertismentEdit!: IAdvertisment;

  handleDelete() {
    this.delete.emit(this.advertisment);
  }

  handleEdit() {
    this.advertismentEdit = {...this.advertisment};
    this.editMode = true;
  }
  handleEditCancel() {
    this.editMode = false;
  }
  handleUpdate() {
    this.update.emit(this.advertismentEdit); 
  }
}
