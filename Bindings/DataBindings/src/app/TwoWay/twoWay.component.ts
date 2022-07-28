import { Component } from "@angular/core";
import { Repository } from "../Models/repository.model";

@Component({
    selector: 'app-two-way',
    templateUrl: './twoWay.component.html'
})
export class TwoWayComponent {
    repository: Repository = new Repository();
}