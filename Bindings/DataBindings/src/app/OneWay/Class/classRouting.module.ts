import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassComponent } from "./class.component";

const routes: Routes = [
    
    { 
        path: 'bindings/oneWay/class',
        component: ClassComponent
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
export class ClassRoutingModule { }