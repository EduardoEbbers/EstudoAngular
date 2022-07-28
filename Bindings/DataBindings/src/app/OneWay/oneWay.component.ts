import { Component } from "@angular/core";
import { Repository } from "../Models/repository.model";

@Component({
    selector: 'app-one-way',
    templateUrl: './oneWay.component.html'
})
export class OneWayComponent {
    repository: Repository = new Repository();
}