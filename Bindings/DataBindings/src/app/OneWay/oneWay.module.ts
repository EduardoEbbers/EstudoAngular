import { NgModule } from '@angular/core';
import { AttributeModule } from './Attribute/attribute.model';
import { ClassModule } from './Class/class.model';
import { ProductComponent } from './component';
import { StandardPropertyModule } from './StandardProperty/standardProperty.model';
import { StringInterpolationModule } from './StringInterpolation/stringInterpolation.model';

@NgModule({
    imports: [
        StandardPropertyModule,
        StringInterpolationModule,
        AttributeModule,
        ClassModule
    ],
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class OneWayModule { }
