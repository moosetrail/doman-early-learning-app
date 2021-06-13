import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-current-category-list',
  templateUrl: './current-category-list.component.html',
  styleUrls: ['./current-category-list.component.scss'],
})
export class CurrentCategoryListComponent implements OnInit {
  @Input() categories: ReadingCategory<ReadingWord>[] = [];
  @Input() isLoading = false;
  @Input() loadingError = false;
  @Output() moveElement: EventEmitter<
    CdkDragDrop<ReadingCategory<ReadingWord>[] | null>
  > = new EventEmitter<CdkDragDrop<ReadingCategory<ReadingWord>[] | null>>();
  @Output() edit: EventEmitter<ReadingCategory<ReadingWord>> = new EventEmitter<
    ReadingCategory<ReadingWord>
  >();

  constructor() {}

  ngOnInit(): void {}

  public drop(event: CdkDragDrop<ReadingCategory<ReadingWord>[] | any>): void {
    if (
      event.container.data !== null &&
      event.previousContainer.data !== null
    ) {
      this.moveElement.emit(event);
    }
  }

  public editCategory(category: ReadingCategory<ReadingWord> | null): void {
    if (category !== null) {
      this.edit.emit(category);
    }
  }
}
