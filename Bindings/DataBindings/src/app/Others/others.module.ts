import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateReferenceVariablesModule } from "./TemplateReferenceVariables/templateReferenceVariables.module";
import { MicroTemplatesModule } from "./MicroTemplates/microTemplates.module";
import { NgContainerElementModule } from "./ngContainerElement/ngContainerElement.module";
import { OneWayRestrictionsModule } from "./OneWayRestrictons/oneWayRestrictions.module";
import { NgTemplateElementModule } from "./ngTemplateElement/ngTemplateElement.module";


@NgModule({
    imports: [
        CommonModule,
        MicroTemplatesModule,
        NgContainerElementModule,
        NgTemplateElementModule,
        OneWayRestrictionsModule,
        TemplateReferenceVariablesModule
    ]
})
export class OthersModule { }
