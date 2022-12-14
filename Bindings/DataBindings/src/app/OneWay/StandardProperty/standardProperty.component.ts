import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-standard-property',
    templateUrl: './standardProperty.component.html',
    styleUrls: ['./standardProperty.component.css']
})
export class StandardPropertyComponent {
     isDisabled = true;

    constructor(private repository: Repository) {

    }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    getProduct(key: number): Product {
        return this.repository.getProduct(key);
    }

    getHref(): string {
        return this.getProducts()
            .length == 5 ? '/bindings/oneWay/standardProperty' : '/';
    }

    getTitle(key: number): string {
        return this.getProduct(key).category;
    }
    
    getId(key: number): string {
        return this.repository.getProduct(key).name;
    }

    getPlaceholder(): string {
        return "Escreva aqui algo";
    }
}