import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html'
})
export class ClassComponent {
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
}