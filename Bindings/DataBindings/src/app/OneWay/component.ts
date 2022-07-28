import { Component } from "@angular/core";
import { Repository } from "../Models/repository.model";

@Component({
    selector: 'app',
    templateUrl: './template.html'
})
export class ProductComponent {
    repository: Repository = new Repository();
}