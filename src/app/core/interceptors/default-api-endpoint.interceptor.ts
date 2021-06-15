import { AppConfigurationService } from './../configuration/app-configuration.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultApiEndpointInterceptor implements HttpInterceptor {

  constructor(private configuration: AppConfigurationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!request.url.startsWith('http'))
    {
      const apiRequest = request.clone({
        url: this.configuration.apiEndpoint + request.url
      });
      return next.handle(apiRequest);
    }

    return next.handle(request);
  }
}
