import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public items!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Programs',
        items: [
          { label: 'Reading program' },
          { label: 'Math program' },
          { label: 'Knowledge program' },
          { label: 'Physical program' },
          { label: 'Physiological program' },
          { label: 'Breathing program' },
        ],
      },
      {
        label: 'Settings',
        items: [
          { label: 'Children' },
          { label: 'Adult programmers' },
        ],
      },
    ];
  }
}
