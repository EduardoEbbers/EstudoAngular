import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-class',
    templateUrl: './ngClass.component.html'
})
export class NgClassComponent {
    repository: Repository = new Repository();

    getClasses(key: number): string {
        let product = this.repository.getProduct(key);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassesMap(key: number): Object {
        let product = this.repository.getProduct(key);
        return {
            "text-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    isDisabled = true;

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

    getDisabled(): boolean {
        return this.getProducts()
        .length == 5 ? true : false;
    }
    
    getName(key: number): string {
        return 'btn-' + this.getProduct(key).name;
    }

    getPlaceholder(): string {
        return "Escreva aqui algo";
    }
}