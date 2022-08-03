import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HeaderModule } from "./header/header.module";
import { HomeModule } from "./home/home.module";
import { HomeRoutingModule } from "./home/homeRouting.module";

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