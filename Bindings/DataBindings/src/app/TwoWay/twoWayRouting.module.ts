import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TwoWayComponent } from "./twoWay.component";

const routes: Routes = [
    { 
        path: 'bindings/twoWay',
        component: TwoWayComponent
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
export class TwoWayRoutingModule { }