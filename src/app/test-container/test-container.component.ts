import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.css']
})
export class TestContainerComponent {

  constructor(private store: Store) {
    this.store.dispatch({type: 'testAction1'});
  }
}
