import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-string-interpolation',
    templateUrl: './stringInterpolation.component.html'
})
export class StringInterpolationComponent {
    repository: Repository = new Repository();
}