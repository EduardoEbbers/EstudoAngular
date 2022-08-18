import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgContainerElementComponent } from "./ngContainerElement.component";

const routes: Routes = [
   
    { 
        path: 'bindings/others/ngContainerElement',
        component: NgContainerElementComponent
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
export class NgContainerElementRoutingModule { }