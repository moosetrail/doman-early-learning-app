import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadingProgram } from '../../models/interfaces/reading-program';
import { ReadingProgramService } from '../../services/reading-program.service';
import { tap } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-plan-single-words',
  templateUrl: './plan-single-words.component.html',
  styleUrls: ['./plan-single-words.component.scss']
})
export class PlanSingleWordsComponent implements OnInit {

  public programs$!: Observable<ReadingProgram[]>;
  public currentProgram!: ReadingProgram;

  constructor(private programService: ReadingProgramService) { }

  ngOnInit(): void {
    this.programs$ = this.programService.getAllReadingPrograms().pipe((
      tap((programs) => {
        if(programs.length === 1) {
          this.currentProgram = programs[0];
        }
      })
    ));
  }

  public selectProgram(change: MatSelectChange): void {
    this.currentProgram = change.value;
  }

}
