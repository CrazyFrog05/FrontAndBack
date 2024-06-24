import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IFilterOptions } from '../../common/types';

@Component({
  selector: 'app-ui-filter',
  templateUrl: 'ui-filter.component.html',
  styleUrls: ['ui-filter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class UiFilterComponent {
  @Input()
  filterOptions!: IFilterOptions[];

  @Output()
  filterChange = new EventEmitter<IFilterOptions[]>();

  constructor() {}

  handleOptionClick(option: {label: string, value: boolean}) {
    option.value = !option.value;
    this.filterChange.emit(this.filterOptions);
  }
}
