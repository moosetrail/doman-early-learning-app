import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import * as fromReadingPrograms from '../../selectors/reading-programs.selectors';
import * as actions from '../../actions/choose-reading-program-component.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-reading-program',
  templateUrl: './choose-reading-program.component.html',
  styleUrls: ['./choose-reading-program.component.scss'],
})
export class ChooseReadingProgramComponent implements OnInit {
  @Output() selectProgram = new EventEmitter<string>();
  programs$ = this.store.select(fromReadingPrograms.allReadingPrograms);
  showProgramSelection$!: Observable<boolean>;
  showLoader$ = this.store.select(fromReadingPrograms.isLoadingReadingPrograms);
  showError$ = this.store.select(fromReadingPrograms.haveLoadingError);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(actions.loadSingleWordsPrograms());

    this.showProgramSelection$ = combineLatest([
      this.showLoader$,
      this.showError$,
    ]).pipe(map(([isLoading, haveError]) => !isLoading && !haveError));
  }

  public programSelected(change: MatSelectChange) {
    this.router.navigate(['reading-program', 'plan', 'single-words', change.value]);
  }
}
