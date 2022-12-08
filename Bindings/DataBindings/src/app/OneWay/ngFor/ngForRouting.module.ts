import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgForComponent } from "./ngFor.component";

const routes: Routes = [ 
    { 
        path: 'bindings/oneWay/ngFor',
        component: NgForComponent
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
export class NgForRoutingModule { }