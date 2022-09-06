import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariablesModule } from "./TemplateReferenceVariables/templateReferenceVariables.module";
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
        TemplateReferenceVariablesModule,
        TruthyFalsyModule
    ]
})
export class OthersModule { }
