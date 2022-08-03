import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AttributeModule } from "./Attribute/attribute.module";
import { ClassModule } from "./Class/class.module";
import { EventModule } from "./Event/event.module";
import { OneWayComponent } from "./oneWay.component";
import { OneWayRoutingModule } from "./oneWayRouting.module";
import { StandardPropertyModule } from "./StandardProperty/standardProperty.module";
import { StringInterpolationModule } from "./StringInterpolation/stringInterpolation.module";
import { StyleModule } from "./Style/style.module";


@NgModule({
    imports: [
        CommonModule,
        StandardPropertyModule,
        StringInterpolationModule,
        AttributeModule,
        ClassModule,
        StyleModule,
        EventModule,
        OneWayRoutingModule,
    ],
    declarations: [
        OneWayComponent
    ]
})
export class OneWayModule { }
