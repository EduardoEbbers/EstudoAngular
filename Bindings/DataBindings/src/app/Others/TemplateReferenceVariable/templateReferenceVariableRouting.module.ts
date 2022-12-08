import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateReferenceVariableComponent } from "./templateReferenceVariable.component";

const routes: Routes = [
    { 
        path: 'bindings/others/templateReferenceVariable',
        component: TemplateReferenceVariableComponent
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
export class TemplateReferenceVariableRoutingModule { }