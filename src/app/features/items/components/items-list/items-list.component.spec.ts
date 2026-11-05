import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ItemsListComponent } from './items-list.component';
import { DisplayFilterPipe } from '../../../../shared/pipes/display-filter.pipe';
import { RetrieveItemsService } from '../../../../shared/services/retrieve-items.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent, DisplayFilterPipe ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: RetrieveItemsService, useValue: { getItems: () => of([]) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
