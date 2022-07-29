import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClassComponent } from "./class.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ClassComponent
    ],
    exports: [
        ClassComponent
    ]
})
export class ClassModule { }