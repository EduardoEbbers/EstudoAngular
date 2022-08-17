import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgStyleComponent } from "./ngStyle.component";
import { NgStyleRoutingModule } from "./ngStyleRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgStyleRoutingModule
    ],
    declarations: [
        NgStyleComponent
    ],
    exports: [
        //StandardPropertyComponent
    ]
})
export class NgStyleModule { }