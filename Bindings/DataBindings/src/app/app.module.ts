import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./appRouting.module";
import { CoreModule } from "./core/core.module";
import { OneWayModule } from "./oneWay/oneWay.module";
import { OthersModule } from "./others/others.module";
import { TwoWayModule } from "./twoWay/twoWay.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    OneWayModule,
    TwoWayModule,
    OthersModule,
    AppRoutingModule,
    CoreModule,
    RouterModule.forRoot([])
  ],
  declarations: [ 
    AppComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
