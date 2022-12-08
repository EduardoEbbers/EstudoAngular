import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MicroTemplateComponent } from "./microTemplate.component";

const routes: Routes = [
    { 
        path: 'bindings/others/microTemplate',
        component: MicroTemplateComponent
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
export class MicroTemplateRoutingModule { }