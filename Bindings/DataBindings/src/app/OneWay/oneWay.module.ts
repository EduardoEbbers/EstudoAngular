import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AttributeModule } from "./Attribute/attribute.module";
import { ClassModule } from "./Class/class.module";
import { EventModule } from "./Event/event.module";
import { NgClassModule } from "./ngClass/ngClass.module";
import { NgForModule } from "./ngFor/ngFor.module";
import { NgIfModule } from "./ngIf/ngIf.module";
import { NgStyleModule } from "./ngStyle/ngStyle.module";
import { NgSwitchModule } from "./ngSwitch/ngSwitch.module";
import { NgTemplateOutletModule } from "./ngTemplateOutlet/ngTemplateOutlet.module";
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
        NgClassModule,
        NgStyleModule,
        NgIfModule,
        NgForModule,
        NgSwitchModule,
        NgTemplateOutletModule,
        OneWayRoutingModule,
        
    ],
    declarations: [
        OneWayComponent
    ]
})
export class OneWayModule { }
