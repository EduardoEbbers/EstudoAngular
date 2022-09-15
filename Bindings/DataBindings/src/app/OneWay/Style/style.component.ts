import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-style',
    templateUrl: './style.component.html',
    styleUrls: ['./style.component.css']
})
export class StyleComponent {
    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";
    repository: Repository = new Repository();

    getStylesMap(key: number) {
        let product = this.repository.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price < 50 ? "red" : "green"
        };
    }
}