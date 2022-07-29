import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StyleComponent } from "./style.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        StyleComponent
    ],
    exports: [
        StyleComponent
    ]
})
export class StyleModule { }