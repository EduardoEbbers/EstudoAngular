import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StyleComponent } from "./style.component";
import { StyleRoutingModule } from "./styleRouting.module";

@NgModule({
    imports: [
        CommonModule,
        StyleRoutingModule
    ],
    declarations: [
        StyleComponent
    ],
    exports: [
        StyleComponent
    ]
})
export class StyleModule { }