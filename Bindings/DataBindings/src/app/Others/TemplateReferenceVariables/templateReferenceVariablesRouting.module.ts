import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateReferenceVariablesComponent } from "./templateReferenceVariables.component";

const routes: Routes = [
    
    { 
        path: 'bindings/others/templateReferenceVariables',
        component: TemplateReferenceVariablesComponent
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
export class TemplateReferenceVariablesRoutingModule { }