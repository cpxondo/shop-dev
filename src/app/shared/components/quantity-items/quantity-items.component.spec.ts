import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityItemsComponent } from './quantity-items.component';

describe('QuantityItemsComponent', () => {
  let component: QuantityItemsComponent;
  let fixture: ComponentFixture<QuantityItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
