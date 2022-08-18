import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-for',
    templateUrl: './ngFor.component.html'
})
export class NgForComponent {
    repository: Repository = new Repository();
    targetName: string = "Kayak";


    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).repository = this.repository;
    }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    getProduct(key: number): Product {
        return this.repository.getProduct(key);
    }

    getProductByPosition(position: number): Product {
        return this.repository
            .getProducts()[position];
    }

    getProductCount(): number {
        return this.getProducts().length;
    }
}