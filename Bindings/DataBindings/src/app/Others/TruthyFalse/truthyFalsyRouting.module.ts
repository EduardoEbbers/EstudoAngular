import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TruthyFalsyComponent } from "./truthyFalsy.component";

const routes: Routes = [
    { 
        path: 'bindings/others/truthyFalsy',
        component: TruthyFalsyComponent
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
export class TruthyFalsyRoutingModule { }