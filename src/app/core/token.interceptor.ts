import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (request.headers.get("token") !== "noToken" && !request.url.includes('password')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

   
    if (!request.headers.has("Content-Type") && !request.headers.has("upload")) {
      request = request.clone({
        headers: request.headers.set("Content-Type", "application/json")
      });
    }

    request = request.clone({
      headers: request.headers.set("Accept", "application/json")
    });
    return next.handle(request);
  }
}
