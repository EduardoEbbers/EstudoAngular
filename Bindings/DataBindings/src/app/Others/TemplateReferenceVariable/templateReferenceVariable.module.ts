import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariableComponent } from "./templateReferenceVariable.component";
import { TemplateReferenceVariableRoutingModule } from "./templateReferenceVariableRouting.module";

@NgModule({
    imports: [
        CommonModule,
        TemplateReferenceVariableRoutingModule
    ],
    declarations: [
        TemplateReferenceVariableComponent
    ]
})
export class TemplateReferenceVariableModule { }