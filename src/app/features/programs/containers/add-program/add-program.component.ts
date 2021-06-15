import { AddChildComponent } from './../add-child/add-child.component';
import { ProgramsService } from './../../services/programs.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProgramType } from 'src/app/shared/models/interfaces/program-type';
import { MatDialog } from '@angular/material/dialog';
import { Child } from 'src/app/shared/models/interfaces/child';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  public children$!: Observable<Child[]>;
  public programTypes$: Observable<ProgramType[]> = this.programsService.getAllProgramTypes();
  public childrenForm = new FormControl();
  public programForm = new FormControl();

  constructor(private programsService: ProgramsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addChild(): void {
    const dialog = this.dialog.open(AddChildComponent);
  }

}
