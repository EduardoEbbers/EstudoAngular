import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgTemplateElementComponent } from "./ngTemplateElement.component";

const routes: Routes = [
   
    { 
        path: 'bindings/others/ngTemplateElement',
        component: NgTemplateElementComponent
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
export class NgTemplateElementRoutingModule { }