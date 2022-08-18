import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OneWayRestrictionsComponent } from "./OneWayRestrictions.component";

const routes: Routes = [
    
    { 
        path: 'bindings/others/oneWayRestrictions',
        component: OneWayRestrictionsComponent
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
export class OneWayRestrictionsRoutingModule { }