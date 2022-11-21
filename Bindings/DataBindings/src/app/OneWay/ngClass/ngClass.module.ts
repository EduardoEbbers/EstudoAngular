import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgClassComponent } from "./ngClass.component";
import { NgClassRoutingModule } from "./ngClassRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgClassRoutingModule
    ],
    declarations: [
        NgClassComponent
    ]
})
export class NgClassModule { }