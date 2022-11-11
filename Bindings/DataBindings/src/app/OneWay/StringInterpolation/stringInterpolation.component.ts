import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-string-interpolation',
    templateUrl: './stringInterpolation.component.html',
    styleUrls: ['./stringInterpolation.component.css']
})
export class StringInterpolationComponent {
    constructor(public repository: Repository) {
        
    }
    
    getProduct(key: number): Product {
        return this.repository.getProduct(key);
    }
}