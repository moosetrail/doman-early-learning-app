import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-checklist',
  templateUrl: './reading-checklist.component.html',
  styleUrls: ['./reading-checklist.component.scss']
})
export class ReadingChecklistComponent implements OnInit {

  @Input() children: string[] = [];

  public readingUnits!: any[];
  public displayCheckboxes: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.readingUnits = testReading;

    this.displayCheckboxes = !(this.children.length > 2 && this.readingUnits[0].sessions.length > 2);
  }
}

const testReading: any[] = [
  {
    name: 'Djur',
    sessions: [false, false, false]
  },
  {
    name: 'Familjen',
    sessions: [false, false, false]
  },
  {
    name: 'Pippi Långstrump',
    sessions: [false, false, false]
  },
  {
    name: 'Paw Patrol',
    sessions: [false, false, false]
  }
];
