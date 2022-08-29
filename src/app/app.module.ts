import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { RouterModule } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";
import { FactureComponent } from './pages/facture/facture.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { ComponentComponent } from './pressing/component/component.component';
import { AuthGuardService } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';
import { TokenInterceptor } from './core/token.interceptor';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    AuthLayoutModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FactureComponent,
    ComponentComponent,
    

  ],
  providers: [AuthGuardService,
    AuthService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
