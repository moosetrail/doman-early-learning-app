import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-planned-category-list',
  templateUrl: './planned-category-list.component.html',
  styleUrls: ['./planned-category-list.component.scss']
})
export class PlannedCategoryListComponent implements OnInit, OnChanges {
  @Input() categories: ReadingCategory<ReadingWord>[] = [];
  @Input() isLoading: boolean | null = false;
  @Input() loadingError = false;
  @Output() moveElement: EventEmitter<
    CdkDragDrop<ReadingCategory<ReadingWord>[] | null>
  > = new EventEmitter<CdkDragDrop<ReadingCategory<ReadingWord>[] | null>>();
  @Output() edit: EventEmitter<ReadingCategory<ReadingWord>> = new EventEmitter<
    ReadingCategory<ReadingWord>
  >();

  public showPrimary = false;
  public showNoCategories = false;

  constructor() { }

  ngOnInit(): void {
    this.setViewState();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.setViewState();
  }

  private setViewState(){
    if(this.isLoading == null){
      this.isLoading = true;
    }

    if(!this.isLoading && !this.loadingError){
      this.showPrimary = this.categories.length > 0
      this.showNoCategories = !this.showPrimary;
    }
  }

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
