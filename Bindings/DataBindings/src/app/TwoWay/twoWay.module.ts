import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModelModule } from "./NgModel/ngModel.module";
import { TwoWayComponent } from "./twoWay.component";
import { TwoWayRoutingModule } from "./twoWayRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgModelModule,
        TwoWayRoutingModule
    ],
    declarations: [
        TwoWayComponent
    ]
})
export class TwoWayModule { }
