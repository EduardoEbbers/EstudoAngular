import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";
import { Product } from 'src/app/Models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    repository: Repository = new Repository();
}