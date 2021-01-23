import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadingProgram } from '../../models/interfaces/reading-program';
import { ReadingProgramService } from '../../services/reading-program.service';
import { MatSelectChange } from '@angular/material/select';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-plan-single-words',
  templateUrl: './plan-single-words.component.html',
  styleUrls: ['./plan-single-words.component.scss']
})
export class PlanSingleWordsComponent implements OnInit {

  public programs$!: Observable<ReadingProgram[]>;
  public currentProgram$!: Observable<ReadingProgram | null>;
  public currentCategories$: Observable<ReadingCategory<ReadingWord>[]> | null = null;
  public plannedCategories$!: Observable<ReadingCategory<ReadingWord>[]>;
  public completedCategories$!: Observable<ReadingCategory<ReadingWord>[]>;

  constructor(private programService: ReadingProgramService) { }

  ngOnInit(): void {
    this.programs$ = this.programService.getAllReadingPrograms();
    this.currentProgram$ = this.programService.getCurrentProgram();
    this.currentCategories$ = this.programService.getCurrentWordCategories();
    this.plannedCategories$ = this.programService.getPlannedWordCategories();
    this.completedCategories$ = this.programService.getCompletedWordCategories();
  }

  public selectProgram(change: MatSelectChange): void {
    this.programService.setCurrentReadingProgram(change.value);
  }
}
