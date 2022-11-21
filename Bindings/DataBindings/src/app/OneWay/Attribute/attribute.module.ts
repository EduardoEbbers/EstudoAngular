import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AttributeComponent } from "./attribute.component";
import { AttributeRoutingModule } from "./attributeRouting.module";

@NgModule({
    imports: [
        CommonModule,
        AttributeRoutingModule
    ],
    declarations: [
        AttributeComponent
    ]
})
export class AttributeModule { }