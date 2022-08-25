import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.component";
import { HeaderModule } from "./Header/header.module";
import { HomeModule } from "./Home/home.module";
import { HomeRoutingModule } from "./Home/homeRouting.module";

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        HomeModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }