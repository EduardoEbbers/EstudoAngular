import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MicroTemplatesComponent } from "./microTemplates.component";
import { MicroTemplatesRoutingModule } from "./microTemplatesRouting.module";

@NgModule({
    imports: [
        CommonModule,
        MicroTemplatesRoutingModule
    ],
    declarations: [
        MicroTemplatesComponent
    ],
    exports: [
        MicroTemplatesComponent
    ]
})
export class MicroTemplatesModule { }