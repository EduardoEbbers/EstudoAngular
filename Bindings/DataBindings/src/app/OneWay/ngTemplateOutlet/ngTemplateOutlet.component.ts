import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-template-outlet',
    templateUrl: './ngTemplateOutlet.component.html',
    styleUrls: ['./ngTemplateOutlet.component.css']
})
export class NgTemplateOutletComponent {
    targetName: string = "Kayak";

    constructor(ref: ApplicationRef, public repository: Repository) {
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