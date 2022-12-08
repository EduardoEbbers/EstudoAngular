import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EventComponent } from "./event.component";
import { EventRoutingModule } from "./eventRouting.module";

@NgModule({
    imports: [
        EventRoutingModule
    ],
    declarations: [
        EventComponent
    ]
})
export class EventModule { }