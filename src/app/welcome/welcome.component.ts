import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Translate {
  code: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnChanges {
  title: string;
  subtitle: string;
  translations: Translate[];

  @Input() recievedTranslate: string;

  constructor() {
    this.title = 'Bienvenido a DevShop!';
    this.subtitle = 'Donde puedes comprar cualquier cosa que imagines';
  }

  ngOnInit() {
    this.translations = [
      { code: 'es', title: 'Bienvenido a DevShop!', subtitle: 'Donde puedes comprar cualquier cosa que imagines'},
      { code: 'en', title: 'Welcome to DevShop!', subtitle: 'Where you can buy anything you imagine'},
      { code: 'ca', title: 'Benvigut a DevShop!', subtitle: 'On pots comprar qualsevol cosa que imagines'},
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.recievedTranslate.currentValue !== undefined &&
    changes.recievedTranslate.currentValue !== changes.recievedTranslate.previousValue) {
      this.changeLocale(changes.recievedTranslate.currentValue);
    }
  }

  changeLocale(code: string) {
    const selected = this.translations.filter(function(trans) {
      return trans.code === code;
    });

    this.title = selected[0].title;
    this.subtitle = selected[0].subtitle;
  }

}
