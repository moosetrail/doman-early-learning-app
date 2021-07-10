import { ReadingCard } from './../../models/interfaces/reading-card';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-planned-category-list',
  templateUrl: './planned-category-list.component.html',
  styleUrls: ['./planned-category-list.component.scss'],
})
export class PlannedCategoryListComponent implements OnInit, OnChanges {
  @Input() categories: ReadingCategory<ReadingCard>[] = [];
  @Input() isLoading: boolean | null = false;
  @Input() loadingError = false;
  @Output() moveElement = new EventEmitter<CdkDragDrop<ReadingCategory<ReadingCard>[] | null>>();
  @Output() edit = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() moveToCurrent = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() moveToCompleted = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() remove = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() viewStatistics = new EventEmitter<ReadingCategory<ReadingCard>>();

  public showPrimary = false;
  public showNoCategories = false;

  constructor() {}

  ngOnInit(): void {
    this.setViewState();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.setViewState();
  }

  private setViewState() {
    if (this.isLoading == null) {
      this.isLoading = true;
    }

    if (!this.isLoading && !this.loadingError) {
      this.showPrimary = this.categories.length > 0;
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
}
