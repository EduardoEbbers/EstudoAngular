import { NgModule } from "@angular/core";
import { AttributeModule } from "./Attribute/attribute.model";
import { ClassModule } from "./Class/class.model";
import { ProductComponent } from "./component";
import { EventModule } from "./Event/event.model";
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
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class OneWayModule { }
