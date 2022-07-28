import { NgModule } from "@angular/core";
import { AttributeModule } from "./Attribute/attribute.model";
import { ClassModule } from "./Class/class.model";
import { EventModule } from "./Event/event.model";
import { OneWayComponent } from "./oneWay.component";
import { StandardPropertyModule } from "./StandardProperty/standardProperty.model";
import { StringInterpolationModule } from "./StringInterpolation/stringInterpolation.model";
import { StyleModule } from "./Style/style.model";


@NgModule({
    imports: [
        StandardPropertyModule,
        StringInterpolationModule,
        AttributeModule,
        ClassModule,
        StyleModule,
        EventModule
    ],
    declarations: [
        OneWayComponent
    ],
    exports: [
        OneWayComponent
    ]
})
export class OneWayModule { }
