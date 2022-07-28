import { NgModule } from "@angular/core";
import { TwoWayComponent } from "./twoWay.component";

@NgModule({
    declarations: [
        TwoWayComponent
    ],
    exports: [
        TwoWayComponent
    ]
})
export class TwoWayModule { }
