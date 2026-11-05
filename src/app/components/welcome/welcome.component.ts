import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WelcomeComponent {}
