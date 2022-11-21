import { NgModule } from "@angular/core";
import { DataSource } from "./datasource.model";
import { Repository } from "./repository.model";

@NgModule({
    providers: [
        DataSource,
        Repository
    ]
})
export class ModelsModule { }