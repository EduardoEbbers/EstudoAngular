import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ngSwitch.component.html'
})
export class NgSwitchComponent {
    repository: Repository = new Repository();
    targetName: string = "Kayak";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).repository = this.repository;
    }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }
}