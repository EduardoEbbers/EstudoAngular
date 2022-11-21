import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgTemplateOutletComponent } from "./ngTemplateOutlet.component";
import { NgTemplateOutletRoutingModule } from "./ngTemplateOutletRouting.module";

@NgModule({
    imports: [
        CommonModule,
        NgTemplateOutletRoutingModule
    ],
    declarations: [
        NgTemplateOutletComponent
    ]
})
export class NgTemplateOutletModule { }