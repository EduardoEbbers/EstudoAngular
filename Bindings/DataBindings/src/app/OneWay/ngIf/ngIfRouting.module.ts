import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgIfComponent } from "./ngIf.component";

const routes: Routes = [
   
    { 
        path: 'bindings/oneWay/ngIf',
        component: NgIfComponent
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
export class NgIfRoutingModule { }