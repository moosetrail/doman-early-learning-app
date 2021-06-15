import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AddChildComponent } from './add-child.component';

describe('AddChildComponent', () => {
 let spectator: Spectator<AddChildComponent>;
 const createComponent = createComponentFactory({
 component: AddChildComponent,
 providers: [
 ],
 imports: [
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
 ]
 });

 beforeEach(() => spectator = createComponent());

 it('should create', () => {
 expect(spectator).toBeTruthy();
 });
});
