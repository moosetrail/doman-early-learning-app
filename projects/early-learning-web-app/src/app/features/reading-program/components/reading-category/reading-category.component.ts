import { ReadingCategory } from './../../models/interfaces/reading-category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reading-category',
  templateUrl: './reading-category.component.html',
  styleUrls: ['./reading-category.component.scss']
})
export class ReadingCategoryComponent implements OnInit {

  @Input() category: ReadingCategory<any> | null = null;
  @Input() showMoveToCompleted = true;
  @Input() showMoveToPlanned = true;
  @Input() showMoveToCurrent = true;
  @Input() showRemove = true;
  @Input() showStatistics = true;
  @Input() showEdit = true;

  @Output() edit = new EventEmitter<ReadingCategory<any>>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEdit(): void {
    if (this.category != null) {
      this.edit.emit(this.category);
    }
  }
}
