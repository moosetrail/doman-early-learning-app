import { CategoryServerStatus } from './../../models/category-server-status';
import { ReadingCard } from './../../models/interfaces/reading-card';
import { ReadingCategory } from './../../models/interfaces/reading-category';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reading-category',
  templateUrl: './reading-category.component.html',
  styleUrls: ['./reading-category.component.scss'],
})
export class ReadingCategoryComponent implements OnInit, OnChanges {
  @Input() category: ReadingCategory<ReadingCard> | null = null;
  @Input() processText: string | null = null;
  @Input() serverStatus: CategoryServerStatus | null = null;
  @Input() showMoveToCompleted = true;
  @Input() showMoveToPlanned = true;
  @Input() showMoveToCurrent = true;
  @Input() showRemove = true;
  @Input() showStatistics = true;
  @Input() showEdit = true;

  @Output() edit = new EventEmitter();
  @Output() moveToCurrent = new EventEmitter();
  @Output() moveToCompleted = new EventEmitter();
  @Output() moveToPlanned = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() statistics = new EventEmitter();

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

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.serverStatus){
      this.processText = this.getProcessingText(changes.serverStatus.currentValue);
    }
  }

  private getProcessingText(status: CategoryServerStatus): string | null {
    switch(status){
      case CategoryServerStatus.Adding: return 'Saving category to server';
      case CategoryServerStatus.Moving: return 'Saving move of category';
      case CategoryServerStatus.Removing: return 'Removing category from system';
      case CategoryServerStatus.UpToDate: return 'Updating category in the system';
      case CategoryServerStatus.Error: return 'Something went wrong'
      default: return null;
    }
  }
}
