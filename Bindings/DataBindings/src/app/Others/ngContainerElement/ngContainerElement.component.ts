import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-container-element',
    templateUrl: './ngContainerElement.component.html'
})
export class NgContainerElementComponent {
    constructor(public repository: Repository) {
        
    }
    
}