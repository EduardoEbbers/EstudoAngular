import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgClassComponent } from "./ngClass.component";

const routes: Routes = [
   
    { 
        path: 'bindings/oneWay/ngClass',
        component: NgClassComponent
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
export class NgClassRoutingModule { }