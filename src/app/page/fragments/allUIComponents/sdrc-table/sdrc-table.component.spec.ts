import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrcTableComponent } from './sdrc-table.component';

describe('SdrcTableComponent', () => {
  let component: SdrcTableComponent;
  let fixture: ComponentFixture<SdrcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdrcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdrcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
