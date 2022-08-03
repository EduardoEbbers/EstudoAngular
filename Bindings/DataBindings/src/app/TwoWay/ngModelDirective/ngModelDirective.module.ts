import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModelDirectiveComponent } from "./ngModelDirective.component";
import { NgModelDirectiveRoutingModule } from "./ngModelDirectiveRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgModelDirectiveRoutingModule
    ],
    declarations: [
        NgModelDirectiveComponent
    ]
})
export class NgModelDirectiveModule { }