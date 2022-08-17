import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgIfComponent } from "./ngIf.component";
import { NgIfRoutingModule } from "./ngIfRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgIfRoutingModule
    ],
    declarations: [
        NgIfComponent
    ],
    exports: [
        //StandardPropertyComponent
    ]
})
export class NgIfModule { }