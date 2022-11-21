import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";

@NgModule({
    imports: [
        CommonModule,
        // é necessario RouterModule ?
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        // é necessario exportar HeaderComponent ?
        HeaderComponent
    ]
})
export class HeaderModule { }