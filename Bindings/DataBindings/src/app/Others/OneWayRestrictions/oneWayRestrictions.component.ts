import { Component } from "@angular/core";
import { Repository } from "src/app/Models/repository.model";

@Component({
    selector: 'app-one-way-restrictions',
    templateUrl: './oneWayRestrictions.component.html'
})
export class OneWayRestrictionsComponent {
    constructor(public repository: Repository) {
        
    }
   
}