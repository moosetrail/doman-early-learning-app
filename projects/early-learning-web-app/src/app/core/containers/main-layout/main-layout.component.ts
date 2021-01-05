import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  isMobile: boolean;

  constructor(private mediaObserver: MediaObserver) {
    this.isMobile = this.isMobile = this.mediaObserver.isActive('lt-md');
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
