import { Component } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-truthy-falsy',
    templateUrl: './truthyFalsy.component.html'
})
export class TruthyFalsyComponent {
    repository: Repository = new Repository();

    getProducts(): Product[] {
        return this.repository.getProducts();
    }
}