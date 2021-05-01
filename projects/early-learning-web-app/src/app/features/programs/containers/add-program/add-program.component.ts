import { AddChildComponent } from './../add-child/add-child.component';
import { ProgramsService } from './../../services/programs.service';
import { Observable } from 'rxjs';
import { Child } from 'projects/early-learning-web-app/src/app/shared/models/interfaces/child';
import { ChildService } from './../../../../shared/services/child.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProgramType } from 'projects/early-learning-web-app/src/app/shared/models/interfaces/program-type';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  public children$: Observable<Child[]> = this.childService.getAllChildren();
  public programTypes$: Observable<ProgramType[]> = this.programsService.getAllProgramTypes();
  public childrenForm = new FormControl();
  public programForm = new FormControl();

  constructor(private childService: ChildService, private programsService: ProgramsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addChild(): void {
    const dialog = this.dialog.open(AddChildComponent);
  }

}
