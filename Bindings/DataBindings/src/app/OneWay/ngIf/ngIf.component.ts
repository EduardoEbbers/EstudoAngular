import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-if',
    templateUrl: './ngIf.component.html',
    styleUrls: ['./ngIf.component.css']
})
export class NgIfComponent {
    repository: Repository = new Repository();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).repository = this.repository;
    }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    getProductByPosition(position: number): Product {
        return this.repository
            .getProducts()[position];
    }

    getProductCount(): number {
        return this.getProducts().length;
    }
}