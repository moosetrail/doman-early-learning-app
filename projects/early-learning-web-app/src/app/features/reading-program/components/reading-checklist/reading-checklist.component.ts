import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-checklist',
  templateUrl: './reading-checklist.component.html',
  styleUrls: ['./reading-checklist.component.scss']
})
export class ReadingChecklistComponent implements OnInit {

  @Input() children: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
