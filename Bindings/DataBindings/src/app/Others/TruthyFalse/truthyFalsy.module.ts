import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TruthyFalsyComponent } from "./truthyFalsy.component";
import { TruthyFalsyRoutingModule } from "./truthyFalsyRouting.module";

@NgModule({
    imports: [
        CommonModule,
        TruthyFalsyRoutingModule
    ],
    declarations: [
        TruthyFalsyComponent
    ]
})
export class TruthyFalsyModule { }