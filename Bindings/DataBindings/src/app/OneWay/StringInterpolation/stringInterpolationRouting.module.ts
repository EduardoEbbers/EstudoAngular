import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StringInterpolationComponent } from "./stringInterpolation.component";

const routes: Routes = [
    
    { 
        path: 'bindings/oneWay/stringInterpolation',
        component: StringInterpolationComponent
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
export class StringInterpolationRoutingModule { }