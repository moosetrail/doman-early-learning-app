import { DefaultApiEndpointInterceptor } from './interceptors/default-api-endpoint.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './containers/main-layout/main-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReadingProgramModule } from '../features/reading-program/reading-program.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import * as actions from './actions/app.actions';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // VENDOR
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // MATERIAL
    MatToolbarModule,
    MatSidenavModule,

    // LOCAL
    SharedModule,
    ReadingProgramModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultApiEndpointInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store) => () => {
        store.dispatch(actions.appInitialize());
      },
      multi: true,
      deps: [Store],
    },
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
