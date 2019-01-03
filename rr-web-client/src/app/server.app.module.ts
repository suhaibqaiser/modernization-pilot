import { BrowserModule } from '@angular/platform-browser';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';

import { AppComponent } from './app.component'; 

@NgModule({
    imports: [
        AppModule,
        ServerTransferStateModule,
        BrowserModule.withServerTransition({ appId: 'ssr-example'}),
        ServerModule,
    ],
    bootstrap: [AppComponent]
})
export class ServerAppModule { }