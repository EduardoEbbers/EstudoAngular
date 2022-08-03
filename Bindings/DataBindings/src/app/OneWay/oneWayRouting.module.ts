import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OneWayComponent } from "./oneWay.component";

const routes: Routes = [
    {
        path: 'bindings/oneWay',
        component: OneWayComponent
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
export class OneWayRoutingModule { }