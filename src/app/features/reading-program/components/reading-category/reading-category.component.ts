import { ReadingCategory } from './../../models/interfaces/reading-category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reading-category',
  templateUrl: './reading-category.component.html',
  styleUrls: ['./reading-category.component.scss'],
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

  public numberToPad: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.category != null) {
     const nbrToPad = 5 - this.category?.cards.length;
     for (let i = 0; i < nbrToPad; i++) {
       this.numberToPad[i] = true;
     }
    }
  }

  clickEdit(): void {
    if (this.category != null) {
      this.edit.emit(this.category);
    }
  }
}
