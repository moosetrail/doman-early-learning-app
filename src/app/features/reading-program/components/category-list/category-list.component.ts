import { CategoryListType } from './category-list-type';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ReadingCard } from '../../models/interfaces/reading-card';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnChanges {
  @Input() categories: ReadingCategory<ReadingCard>[] | null = [];
  @Input() isLoading: boolean | null = false;
  @Input() loadingError: boolean | null = false;
  @Input() categoryType: CategoryListType = CategoryListType.Planned;
  @Output() moveElement = new EventEmitter<
    CdkDragDrop<ReadingCategory<ReadingCard>[] | null>
  >();
  @Output() edit = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() moveToCurrent = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() moveToCompleted = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() moveToPlanned = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() remove = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() viewStatistics = new EventEmitter<ReadingCategory<ReadingCard>>();
  @Output() loadMore = new EventEmitter<void>();

  public showPrimary = false;
  public showNoCategories = false;
  public categoryTypeName!: string;
  public showMoveToPlanned = true;
  public showMoveToCurrent = true;
  public showMoveToCompleted = true;
  public showEdit = true;
  public showRemove = true;

  dropZoneName = '';
  otherDropZones: string[] = [];

  public categoryTypes = CategoryListType;

  constructor() {}

  ngOnInit(): void {
    this.setViewState();
    this.setCategoryType();
  }

  private setCategoryType() {
    switch (this.categoryType) {
      case CategoryListType.Completed: {
        this.categoryTypeName = 'completed';
        this.showMoveToCompleted = false;
        this.showEdit = false;
        this.showRemove = false;
        this.dropZoneName = 'completed';
        break;
      }
      case CategoryListType.Current: {
        this.categoryTypeName = 'current';
        this.showMoveToCurrent = false;
        this.dropZoneName = 'current';
        this.setOtherDropZones(this.dropZoneName);
        break;
      }
      case CategoryListType.Planned: {
        this.categoryTypeName = 'planned';
        this.showMoveToPlanned = false;
        this.dropZoneName = 'planned';
        this.setOtherDropZones(this.dropZoneName);
        break;
      }
    }
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.setViewState();
  }

  private setViewState() {
    if (this.isLoading == null || this.categories == null) {
      this.isLoading = true;
    }

    if (!this.isLoading && !this.loadingError && this.categories != null) {
      this.showPrimary = this.categories.length > 0;
      this.showNoCategories = !this.showPrimary;
    }
  }

  private setOtherDropZones(dropZoneName: string): void {
    this.otherDropZones = ['completed', 'current', 'planned'];
    const currentIndex = this.otherDropZones.indexOf(dropZoneName);
    this.otherDropZones.splice(currentIndex, 1);
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
