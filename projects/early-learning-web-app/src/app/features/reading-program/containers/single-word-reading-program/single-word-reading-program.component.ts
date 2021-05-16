import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Child } from 'projects/early-learning-web-app/src/app/shared/models/interfaces/child';
import { Observable, Subject } from 'rxjs';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';
import { OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as actions from '../../actions/single-word-reading-program-component.actions';

@Component({
  selector: 'app-single-word-reading-program',
  templateUrl: './single-word-reading-program.component.html',
  styleUrls: ['./single-word-reading-program.component.scss']
})
export class SingleWordReadingProgramComponent implements OnInit, OnDestroy {
  @Input() programId!: string;
  public showCompleted = false;

  public childrenOnProgram$: Observable<Child[]> | null = null;
  public completed: ReadingCategory<ReadingWord>[] = [];
  public current: ReadingCategory<ReadingWord>[] = [];
  public planned: ReadingCategory<ReadingWord>[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(actions.loadSingleWordReadingProgramComponents());

    /* this.programService
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
      }); */
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
