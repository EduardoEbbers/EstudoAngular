import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgStyleComponent } from "./ngStyle.component";

const routes: Routes = [
    { 
        path: 'bindings/oneWay/ngStyle',
        component: NgStyleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NgStyleRoutingModule { }