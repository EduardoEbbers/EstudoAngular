import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgModelDirectiveComponent } from "./ngModelDirective.component";

const routes: Routes = [
   
    { 
        path: 'bindings/twoWay/ngModel',
        component: NgModelDirectiveComponent
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
export class NgModelDirectiveRoutingModule { }