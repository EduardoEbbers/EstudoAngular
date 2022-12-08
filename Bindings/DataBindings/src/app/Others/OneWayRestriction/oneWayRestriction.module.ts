import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OneWayRestrictionComponent } from "./oneWayRestriction.component";
import { OneWayRestrictionRoutingModule } from "./oneWayRestrictionRouting.module";

@NgModule({
    imports: [
        CommonModule,
        OneWayRestrictionRoutingModule
    ],
    declarations: [
        OneWayRestrictionComponent
    ]
})
export class OneWayRestrictionsModule { }