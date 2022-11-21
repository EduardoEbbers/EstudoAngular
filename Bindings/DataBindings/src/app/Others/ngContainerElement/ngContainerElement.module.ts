import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgContainerElementComponent } from "./ngContainerElement.component";
import { NgContainerElementRoutingModule } from "./ngContainerElementRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgContainerElementRoutingModule
    ],
    declarations: [
        NgContainerElementComponent
    ]
})
export class NgContainerElementModule { }