import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        BrowserTransferStateModule,
        BrowserModule.withServerTransition({ appId: 'ssr-example' }),
    ],
    bootstrap: [AppComponent]
})

export class BrowserAppModule { }