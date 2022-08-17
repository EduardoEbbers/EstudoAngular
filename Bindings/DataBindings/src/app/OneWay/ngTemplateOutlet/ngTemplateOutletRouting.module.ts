import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgTemplateOutletComponent } from "./ngTemplateOutlet.component";

const routes: Routes = [
   
    { 
        path: 'bindings/oneWay/ngTemplateOutlet',
        component: NgTemplateOutletComponent
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
export class NgTemplateOutletRoutingModule { }