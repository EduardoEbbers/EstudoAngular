import { NgModule } from "@angular/core";
import { SidebarComponent } from "./Sidebar/sidebar.component";
import { SidebarModule } from "./Sidebar/sidebar.module";
import { HomeModule } from "./Home/home.module";
import { HeaderModule } from "./Header/header.module";
import { HeaderComponent } from "./Header/header.component";

@NgModule({
    imports: [
        SidebarModule,
        HeaderModule,
        HomeModule
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ]
})
export class CoreModule { }