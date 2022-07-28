import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { OneWayComponent } from "./OneWay/oneWay.component";
import { OneWayModule } from "./OneWay/oneWay.module";
import { TwoWayComponent } from "./TwoWay/twoWay.component";
import { TwoWayModule } from "./TwoWay/twoWay.module";

@NgModule({
  imports: [
    BrowserModule,
    OneWayModule,
    TwoWayModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
