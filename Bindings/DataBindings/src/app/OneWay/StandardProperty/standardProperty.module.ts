import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StandardPropertyComponent } from "./standardProperty.component";
import { StandardPropertyRoutingModule } from "./standardPropertyRouting.module";

@NgModule({
    imports: [
        CommonModule,
        StandardPropertyRoutingModule
    ],
    declarations: [
        StandardPropertyComponent
    ],
    exports: [
        //StandardPropertyComponent
    ]
})
export class StandardPropertyModule { }