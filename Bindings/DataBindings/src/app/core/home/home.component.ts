import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

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