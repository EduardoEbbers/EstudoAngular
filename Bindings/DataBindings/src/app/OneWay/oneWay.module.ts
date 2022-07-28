import { NgModule } from '@angular/core';
import { ProductComponent } from './component';
import { StandardPropertyModule } from './StandardProperty/standardProperty.model';
import { StringInterpolationModule } from './StringInterpolation/stringInterpolation.model';

@NgModule({
    imports: [
        StandardPropertyModule,
        StringInterpolationModule
    ],
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class OneWayModule { }
