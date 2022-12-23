import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgModelComponent } from "./ngModel.component";

const routes: Routes = [
    { 
        path: 'bindings/twoWay/ngModel',
        component: NgModelComponent
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
export class NgModelRoutingModule { }