import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModelDirectiveModule } from "./ngModelDirective/ngModelDirective.module";
import { TwoWayComponent } from "./twoWay.component";
import { TwoWayRoutingModule } from "./twoWayRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgModelDirectiveModule,
        TwoWayRoutingModule
    ],
    declarations: [
        TwoWayComponent
    ]
})
export class TwoWayModule { }
