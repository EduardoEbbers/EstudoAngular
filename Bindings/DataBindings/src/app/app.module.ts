import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './OneWay/component';
import { OneWayModule } from './OneWay/oneWay.module';

@NgModule({
  imports: [
    BrowserModule,
    OneWayModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
