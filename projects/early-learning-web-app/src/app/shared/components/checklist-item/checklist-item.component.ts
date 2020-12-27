import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent implements OnInit {

  @Input() nbrOfSessions: number = 0;
  @Input() nbrOfCompletedSessions: number = 0;
  @Input() showCheckboxes: boolean = true;

  public sessions: boolean[] = [];

  constructor() { }

  ngOnInit(): void {

    if(this.showCheckboxes){
      for(let i = 0; i < this.nbrOfSessions; i++){
        this.sessions[i] = i < this.nbrOfCompletedSessions;
      }
    }
  }

}
