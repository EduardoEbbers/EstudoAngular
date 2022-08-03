import { Component } from '@angular/core';
import { Repository } from './Models/repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'DataBindings';
  repository: Repository = new Repository();
}
