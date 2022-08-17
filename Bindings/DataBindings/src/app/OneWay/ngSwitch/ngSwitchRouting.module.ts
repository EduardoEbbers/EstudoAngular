import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgSwitchComponent } from "./ngSwitch.component";

const routes: Routes = [
   
    { 
        path: 'bindings/oneWay/ngSwitch',
        component: NgSwitchComponent
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
export class NgSwitchRoutingModule { }