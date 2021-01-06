import { Component, Input, OnInit } from '@angular/core';
import { ReadingCategory } from '../../models/interfaces/reading-category';

@Component({
  selector: 'app-reading-category',
  templateUrl: './reading-category.component.html',
  styleUrls: ['./reading-category.component.scss']
})
export class ReadingCategoryComponent implements OnInit {

  @Input() category: ReadingCategory<any> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
