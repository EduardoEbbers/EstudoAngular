import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariablesModule } from "./TemplateReferenceVariables/templateReferenceVariables.module";
import { MicroTemplatesModule } from "./MicroTemplates/microTemplates.module";
import { NgContainerElementModule } from "./NgContainerElement/ngContainerElement.module";
import { OneWayRestrictionsModule } from "./OneWayRestrictons/oneWayRestrictions.module";
import { NgTemplateElementModule } from "./NgTemplateElement/ngTemplateElement.module";
import { TruthyFalsyModule } from "./truthyFalse/truthyFalsy.module";


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
