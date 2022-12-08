import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OneWayRestrictionComponent } from "./oneWayRestriction.component";

const routes: Routes = [
    { 
        path: 'bindings/others/oneWayRestriction',
        component: OneWayRestrictionComponent
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
export class OneWayRestrictionRoutingModule { }