import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() size: number = 100;
  @Input() color: string | null = null;
  @Input() toolTip: string = '';

  public cssClasses: string[] = []

  constructor() { }

  ngOnInit(): void {
    if(this.color != null) {
      this.cssClasses = ['custom', this.color];
    }
  }
}
