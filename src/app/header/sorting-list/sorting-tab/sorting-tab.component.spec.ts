import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingTabComponent } from './sorting-tab.component';

describe('SortingTabComponent', () => {
  let component: SortingTabComponent;
  let fixture: ComponentFixture<SortingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
