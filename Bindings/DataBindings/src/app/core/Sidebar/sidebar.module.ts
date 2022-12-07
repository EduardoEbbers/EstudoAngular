import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
    imports: [
        CommonModule,
        // é necessario RouterModule ?
        RouterModule
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        // é necessario exportar SidebarComponent ?
        SidebarComponent
    ]
})
export class SidebarModule { }