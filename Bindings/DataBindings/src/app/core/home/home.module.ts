import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./homeRouting.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    /*
        TALVEZ AQUI SE COLOQUE route-outlet
        PARA AS ROTAS CHILD...
        CONSTRUIR O HOME
    */
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }