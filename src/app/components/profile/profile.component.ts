import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  position: string;
  workplace: string;

  constructor() {
    this.name = 'David Cabrera';
    this.position = 'Developer';
    this.workplace = 'Everis';
  }

  ngOnInit() {
  }

}
