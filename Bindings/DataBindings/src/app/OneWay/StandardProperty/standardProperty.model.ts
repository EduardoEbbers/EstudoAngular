import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StandardPropertyComponent } from "./standardProperty.component";

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        StandardPropertyComponent
    ],
    exports: [
        StandardPropertyComponent
    ]
})
export class StandardPropertyModule { }