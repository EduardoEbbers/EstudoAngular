import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgSwitchComponent } from "./ngSwitch.component";
import { NgSwitchRoutingModule } from "./ngSwitchRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgSwitchRoutingModule
    ],
    declarations: [
        NgSwitchComponent
    ]
})
export class NgSwitchModule { }