import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StandardPropertyComponent } from "./standardProperty.component";

const routes: Routes = [
   
    { 
        path: 'bindings/oneWay/standardProperty',
        component: StandardPropertyComponent
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
export class StandardPropertyRoutingModule { }