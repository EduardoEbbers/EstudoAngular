import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-style',
    templateUrl: './ngStyle.component.html',
    styleUrls: ['./ngStyle.component.css']
})
export class NgStyleComponent {
    constructor(public repository: Repository) {

    }
    getStylesMap(key: number) {
        let product = this.repository.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price < 50 ? "red" : "green"
        };
    }
}