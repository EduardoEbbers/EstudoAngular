import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html',
    styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
    constructor(private repository: Repository) {

    }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }
}