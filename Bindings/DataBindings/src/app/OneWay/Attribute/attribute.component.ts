import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html'
})
export class AttributeComponent {
    repository: Repository = new Repository();
}