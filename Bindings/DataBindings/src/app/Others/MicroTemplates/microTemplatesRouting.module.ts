import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MicroTemplatesComponent } from "./microTemplates.component";

const routes: Routes = [
    
    { 
        path: 'bindings/others/microTemplate',
        component: MicroTemplatesComponent
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
export class MicroTemplatesRoutingModule { }