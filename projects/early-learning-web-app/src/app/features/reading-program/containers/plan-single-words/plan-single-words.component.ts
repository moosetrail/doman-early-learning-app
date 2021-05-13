import { EditCategoryComponent } from '../../components/edit-category/edit-category.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReadingProgram } from '../../models/interfaces/reading-program';
import { ReadingProgramService } from '../../services/reading-program.service';
import { MatSelectChange } from '@angular/material/select';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-single-words',
  templateUrl: './plan-single-words.component.html',
  styleUrls: ['./plan-single-words.component.scss'],
})
export class PlanSingleWordsComponent implements OnInit, OnDestroy {
  public programs$!: Observable<ReadingProgram[]>;
  public currentProgram$!: Observable<ReadingProgram | null>;
  public showCompleted = false;

  public completed: ReadingCategory<ReadingWord>[] = [];
  public current: ReadingCategory<ReadingWord>[] = [];
  public planned: ReadingCategory<ReadingWord>[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private programService: ReadingProgramService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.programs$ = this.programService.getAllReadingPrograms();
    this.currentProgram$ = this.programService.getCurrentProgram();
    this.programService
      .getCurrentWordCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.current = categories;
      });
    this.programService
      .getPlannedWordCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.planned = categories;
      });
    this.programService
      .getCompletedWordCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.completed = categories;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public selectProgram(change: MatSelectChange): void {
    this.programService.setCurrentReadingProgram(change.value);
  }

  public showCompletedCategories(): void {
    this.showCompleted = true;
  }

  public drop(event: CdkDragDrop<ReadingCategory<ReadingWord>[] | null>): void {
    if (event.container.data == null || event.previousContainer.data == null) {
      return;
    }
    if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        // Dispatch event to move in same list but move index if list is planned
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Dispatch event to move category to new list
    }
  }

  public editCategory(category: ReadingCategory<ReadingWord> | null): void {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      data: {
        category,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
