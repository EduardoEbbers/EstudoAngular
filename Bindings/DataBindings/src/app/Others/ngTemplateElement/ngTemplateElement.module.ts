import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgTemplateElementComponent } from "./ngTemplateElement.component";
import { NgTemplateElementRoutingModule } from "./ngTemplateElementRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgTemplateElementRoutingModule
    ],
    declarations: [
        NgTemplateElementComponent
    ]
})
export class NgTemplateElementModule { }