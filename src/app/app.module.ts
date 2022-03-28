import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { StatementComponent } from './statement/statement.component';
import localeIe from '@angular/common/locales/en-IE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIe, 'en-IE');//to format the date

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-IE' },//to format the date
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
