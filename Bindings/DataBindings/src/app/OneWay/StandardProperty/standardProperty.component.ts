import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-standard-property',
    templateUrl: './standardProperty.component.html'
})
export class StandardPropertyComponent {
    repository: Repository = new Repository();
}