import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgForComponent } from "./ngFor.component";
import { NgForRoutingModule } from "./ngForRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgForRoutingModule
    ],
    declarations: [
        NgForComponent
    ],
    exports: [
        //StandardPropertyComponent
    ]
})
export class NgForModule { }