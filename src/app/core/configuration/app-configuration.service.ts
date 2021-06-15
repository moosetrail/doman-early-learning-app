import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  public isProduction: boolean;
  public apiEndpoint: string;

  constructor() {
    this.isProduction = environment.production;
    this.apiEndpoint = environment.apiEndpoint;
  }
}
