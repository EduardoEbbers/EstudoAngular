import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html'
})
export class AttributeComponent {
    repository: Repository = new Repository();

    getProducts(): Product[] {
        return this.repository.getProducts();
    }
}