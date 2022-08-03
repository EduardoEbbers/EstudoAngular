import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClassComponent } from "./class.component";
import { ClassRoutingModule } from "./classRouting.module";

@NgModule({
    imports: [
        CommonModule,
        ClassRoutingModule
    ],
    declarations: [
        ClassComponent
    ],
    exports: [
        ClassComponent
    ]
})
export class ClassModule { }