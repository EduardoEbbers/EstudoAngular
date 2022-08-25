import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/Home/home.component";

const routes: Routes = [
    
    { 
        path: 'bindings',
        loadChildren: () => import('./core/Home/homeRouting.module').then(m => m.HomeRoutingModule)
    },
    { 
        path: '',
        redirectTo: 'bindings',
        pathMatch: 'full'
    },
    { 
        path: '**',
        redirectTo: 'bindings',
        pathMatch: 'full'
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
export class AppRoutingModule { }

