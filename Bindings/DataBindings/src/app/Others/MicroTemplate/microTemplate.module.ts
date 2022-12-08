import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MicroTemplateComponent } from "./microTemplate.component";
import { MicroTemplateRoutingModule } from "./microTemplateRouting.module";

@NgModule({
    imports: [
        CommonModule,
        MicroTemplateRoutingModule
    ],
    declarations: [
        MicroTemplateComponent
    ]
})
export class MicroTemplateModule { }