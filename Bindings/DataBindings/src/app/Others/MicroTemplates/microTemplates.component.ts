import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-micro-templates',
    templateUrl: './microTemplates.component.html'
})
export class MicroTemplatesComponent {
    repository: Repository = new Repository();
}