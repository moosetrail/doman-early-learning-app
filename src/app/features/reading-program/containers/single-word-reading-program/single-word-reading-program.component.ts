import { CategoryListType } from './../../components/category-list/category-list-type';
import { ReadingCard } from './../../models/interfaces/reading-card';
import { EditCategoryInfo } from './../../models/interfaces/edit-category-info';
import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';
import { OnDestroy } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
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
  public completed$ = this.store.select(
    fromReadingCategories.completedCategories
  );
  public isLoadingCompleted$ = this.store.select(
    fromReadingCategories.isLoadingCurrentCategories
  );
  public loadingCompletedError$ = this.store.select(
    fromReadingCategories.errorLoadingCurrentCategories
  );
  public completedStatus$ = this.store.select(fromReadingCategories.completedCategoriesServerStatus);

  public current$ = this.store.select(fromReadingCategories.currentCategories);
  public isLoadingCurrent$ = this.store.select(
    fromReadingCategories.isLoadingCurrentCategories
  );
  public loadingCurrentError$ = this.store.select(
    fromReadingCategories.errorLoadingCurrentCategories
  );
  public currentStatus$ = this.store.select(fromReadingCategories.currentCategoriesServerStatus);

  public planned$ = this.store.select(
    fromReadingCategories.plannedWordCategories
  );
  public isLoadingPlanned$ = this.store.select(
    fromReadingCategories.isLoadingPlannedCategories
  );
  public loadingPlannedError$ = this.store.select(
    fromReadingCategories.errorLoadingPlannedCategories
  );
  public plannedStatus$ = this.store.select(fromReadingCategories.plannedCategoriesServerStatus);

  public categoryTypes = CategoryListType;
  private unsubscribe$ = new Subject<void>();
  private programId!: string;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.programId = params.programId;
      this.store.dispatch(
        actions.loadSingleWordReadingProgramComponents({
          programId: this.programId,
        })
      );
      this.childrenOnProgram$ = this.store.select(
        fromReadingProgram.childrenOnProgram(this.programId)
      );
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public showCompletedCategories(): void {
    this.showCompleted = true;
    this.store.dispatch(
      actions.loadCompletedCategories({ programId: this.programId })
    );
  }

  public editCategory(category: ReadingCategory<ReadingCard> | null): void {
    this.childrenOnProgram$?.pipe(take(1)).subscribe((children) => {
      const dialogRef = this.dialog.open(EditCategoryComponent, {
        data: {
          category,
          children,
        } as EditCategoryInfo<ReadingWord>,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result != undefined) {
          this.store.dispatch(
            actions.addNewCategory({
              programId: this.programId,
              name: result.name,
              words: result.words,
            })
          );
        }
      });
    });
  }

  public moveCategory(
    event: CdkDragDrop<ReadingCategory<ReadingWord>[] | any>
  ): void {
    this.store.dispatch(
      actions.moveCategory({
        previousIndex: event.previousIndex,
        newIndex: event.currentIndex,
        fromList: event.previousContainer.id,
        toList: event.container.id,
        programId: this.programId,
      })
    );
  }

  public moveToCurrent(category: ReadingCategory<ReadingCard>): void {
    this.store.dispatch(
      actions.moveCategoryToCurrent({
        programId: this.programId,
        categoryId: category.id,
      })
    );
  }

  public moveToCompleted(category: ReadingCategory<ReadingCard>): void {
    this.store.dispatch(
      actions.moveCategoryToCompleted({
        programId: this.programId,
        categoryId: category.id,
      })
    );
  }

  public remove(category: ReadingCategory<ReadingCard>): void {
    this.store.dispatch(
      actions.removeCategory({
        programId: this.programId,
        categoryId: category.id,
      })
    );
  }

  public viewStats(category: ReadingCategory<ReadingCard>): void {
    this.store.dispatch(
      actions.loadCategoryStatistics({
        programId: this.programId,
        categoryId: category.id,
      })
    );
  }

  public moveToPlanned(category: ReadingCategory<ReadingCard>): void {
    this.store.dispatch(
      actions.moveCategoryToPlanned({
        programId: this.programId,
        categoryId: category.id,
      })
    );
  }

  public loadMorePlanned(): void {
    this.store.dispatch(actions.loadPlannedCategories({programId: this.programId}));
  }

  public loadMoreCompleted(): void {
    this.store.dispatch(actions.loadCompletedCategories({programId: this.programId}));
  }
}
