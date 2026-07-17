import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ItemDetailsComponent } from './item-details.component';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsComponent ],
      imports: [
        BrowserTestingModule,
        ModalModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' }),
              data: { item: { id: 1, name: 'Test item', price: 10 } }  // 👈 afegit
            },
            paramMap: of(convertToParamMap({ id: '1' })),
            data: of({ item: { id: 1, name: 'Test item', price: 10 } })  // 👈 afegit
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
