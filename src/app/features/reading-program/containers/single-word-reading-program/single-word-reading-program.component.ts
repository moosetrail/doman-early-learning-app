import { EditCategoryInfo } from './../../models/interfaces/edit-category-info';
import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';
import { OnDestroy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import * as actions from '../../actions/single-word-reading-program-component.actions';
import * as fromReadingCategories from '../../selectors/reading-categories.selectors';
import { take, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as fromReadingProgram from '../../selectors/reading-programs.selectors';
import { Child } from 'src/app/shared/models/interfaces/child';

@Component({
  selector: 'app-single-word-reading-program',
  templateUrl: './single-word-reading-program.component.html',
  styleUrls: ['./single-word-reading-program.component.scss'],
})
export class SingleWordReadingProgramComponent implements OnInit, OnDestroy {
  public showCompleted = false;
  public childrenOnProgram$: Observable<Child[]> | null = null;
  public completed: ReadingCategory<ReadingWord>[] = [];
  public current: ReadingCategory<ReadingWord>[] = [];
  public planned: ReadingCategory<ReadingWord>[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const programId = params.programId;
      this.store.dispatch(
        actions.loadSingleWordReadingProgramComponents({ programId })
      );
      this.childrenOnProgram$ = this.store.select(fromReadingProgram.childrenOnProgram(programId));
    });

    this.store
      .select(fromReadingCategories.currentCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.current = categories;
      });

    this.store
      .select(fromReadingCategories.plannedCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.planned = categories;
      });

    this.store
      .select(fromReadingCategories.completedCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.completed = categories;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public showCompletedCategories(): void {
    this.showCompleted = true;
  }

  public drop(event: CdkDragDrop<ReadingCategory<ReadingWord>[] | any>): void {
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
    this.childrenOnProgram$?.pipe(take(1)).subscribe((children) => {
      const dialogRef = this.dialog.open(EditCategoryComponent, {
        data: {
          category,
          children
        } as EditCategoryInfo<ReadingWord>
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    });
  }
}
