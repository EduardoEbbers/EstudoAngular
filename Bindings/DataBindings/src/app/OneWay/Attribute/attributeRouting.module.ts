import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttributeComponent } from "./attribute.component";

const routes: Routes = [
    { 
        path: 'bindings/oneWay/attribute',
        component: AttributeComponent
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
export class AttributeRoutingModule { }