import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModelComponent } from "./ngModel.component";
import { NgModelRoutingModule } from "./ngModelRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgModelRoutingModule
    ],
    declarations: [
        NgModelComponent
    ]
})
export class NgModelModule { }