import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-class',
    templateUrl: './ngClass.component.html',
    styleUrls: ['./ngClass.component.css']
})
export class NgClassComponent {
    constructor(public repository: Repository) {

    }
    
    getClassesString(key: number): String {
        let product = this.repository.getProduct(key);
        return product.name == "Kayak" ? "text-center bg-danger" : "bg-info";
    }

    getClassesArray(key: number): String[] {
        let product = this.repository.getProduct(key);
        return product.price < 50 ? ["text-center", "bg-danger"] : ["text-center", "bg-warning"];
    }

    getClassesMap(key: number): Object {
        let product = this.repository.getProduct(key);
        return {
            "text-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }
}