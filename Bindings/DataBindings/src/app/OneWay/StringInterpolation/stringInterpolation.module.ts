import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StringInterpolationComponent } from "./stringInterpolation.component";
import { StringInterpolationRoutingModule } from "./stringInterpolationRouting.module";

@NgModule({
    imports: [
        CommonModule,
        StringInterpolationRoutingModule
    ],
    declarations: [
        StringInterpolationComponent
    ],
    exports: [
        StringInterpolationComponent
    ]
})
export class StringInterpolationModule { }