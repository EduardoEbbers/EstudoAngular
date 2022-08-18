import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariablesComponent } from "./templateReferenceVariables.component";
import { TemplateReferenceVariablesRoutingModule } from "./TemplateReferenceVariablesRouting.module";

@NgModule({
    imports: [
        CommonModule,
        TemplateReferenceVariablesRoutingModule
    ],
    declarations: [
        TemplateReferenceVariablesComponent
    ],
    exports: [
        TemplateReferenceVariablesComponent
    ]
})
export class TemplateReferenceVariablesModule { }