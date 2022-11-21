import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OneWayRestrictionsComponent } from "./oneWayRestrictions.component";
import { OneWayRestrictionsRoutingModule } from "./OneWayRestrictionsRouting.module";

@NgModule({
    imports: [
        CommonModule,
        OneWayRestrictionsRoutingModule
    ],
    declarations: [
        OneWayRestrictionsComponent
    ]
})
export class OneWayRestrictionsModule { }