import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-ng-model-directive',
    templateUrl: './ngModelDirective.component.html'
})
export class NgModelDirectiveComponent {
    repository: Repository = new Repository();
}