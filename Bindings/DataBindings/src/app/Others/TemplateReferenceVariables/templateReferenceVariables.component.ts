import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-template-reference-variables',
    templateUrl: './templateReferenceVariables.component.html'
})
export class TemplateReferenceVariablesComponent {
    constructor(public repository: Repository) {
        
    }
    
    getProducts(): Product[] {
        return this.repository.getProducts();
    }
}