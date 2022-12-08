import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariableModule } from "./TemplateReferenceVariable/templateReferenceVariable.module";
import { MicroTemplatesModule } from "./MicroTemplates/microTemplates.module";
import { NgContainerElementModule } from "./NgContainerElement/ngContainerElement.module";
import { NgTemplateElementModule } from "./NgTemplateElement/ngTemplateElement.module";
import { TruthyFalsyModule } from "./truthyFalse/truthyFalsy.module";
import { OneWayRestrictionsModule } from "./OneWayRestrictions/oneWayRestrictions.module";


@NgModule({
    imports: [
        CommonModule,
        MicroTemplatesModule,
        NgContainerElementModule,
        NgTemplateElementModule,
        OneWayRestrictionsModule,
        TemplateReferenceVariableModule,
        TruthyFalsyModule
    ]
})
export class OthersModule { }
