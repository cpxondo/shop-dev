import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileComponent {

  name: string;
  position: string;
  workplace: string;

  constructor() {
    this.name = 'David Cabrera';
    this.position = 'Developer';
    this.workplace = 'Everis';
  }

}
