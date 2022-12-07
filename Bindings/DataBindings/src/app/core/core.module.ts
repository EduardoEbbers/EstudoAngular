import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./Sidebar/sidebar.component";
import { SidebarModule } from "./Sidebar/sidebar.module";
import { HomeModule } from "./Home/home.module";
import { HomeRoutingModule } from "./Home/homeRouting.module";
import { HeaderModule } from "./Header/header.module";
import { HeaderComponent } from "./Header/header.component";

@NgModule({
    imports: [
        CommonModule,
        SidebarModule,
        HeaderModule,
        HomeModule
    ],
    exports: [
        //exportar aqui ou no proprio SidebarModule ?
        // e HeaderComponent ?
        SidebarComponent,
        HeaderComponent
    ]
})
export class CoreModule { }