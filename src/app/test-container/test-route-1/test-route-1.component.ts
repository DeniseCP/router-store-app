import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-route-1',
  templateUrl: './test-route-1.component.html',
  styleUrls: ['./test-route-1.component.css']
})
export class TestRoute1Component {

  constructor(private router: Router) { }

  goToTestRoute2() {
    this.router.navigate(['redeem', 'test-route-2']);
  }

  goToTestRoute1() {
    this.router.navigate(['redeem', 'test-route-1']);
  }
}
