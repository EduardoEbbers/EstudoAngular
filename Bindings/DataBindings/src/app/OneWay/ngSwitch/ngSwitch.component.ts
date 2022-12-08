import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ngSwitch.component.html',
    styleUrls: ['./ngSwitch.component.css']
})
export class NgSwitchComponent {
    targetName: string = "Kayak";

    constructor(ref: ApplicationRef, private repository: Repository) {
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