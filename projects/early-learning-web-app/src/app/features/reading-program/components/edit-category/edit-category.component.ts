import { Child } from './../../../../shared/models/interfaces/child';
import { EditCategoryInfo } from './../../models/interfaces/edit-category-info';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReadingCategory } from '../../models/interfaces/reading-category';
import { ReadingWord } from '../../models/interfaces/reading-word';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  public isEditMode = false;
  public edit: ReadingCategory<ReadingWord> = {} as ReadingCategory<ReadingWord>;
  public children!: Child[];

  constructor(public dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditCategoryInfo<ReadingWord>) { }

  ngOnInit(): void {
    if(this.data != null) {
      this.isEditMode = true;
      this.edit = this.data.category;
    }
    this.children = this.data.children;
  }

}
