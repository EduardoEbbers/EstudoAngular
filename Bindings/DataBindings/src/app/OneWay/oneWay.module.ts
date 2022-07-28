import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './component';
import { StandardPropertyModule } from './StandardProperty/standardProperty.model';

@NgModule({
    imports: [
        StandardPropertyModule
    ],
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class OneWayModule { }
