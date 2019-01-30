import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomSubmitComponent } from './bom-submit.component';

describe('BomSubmitComponent', () => {
  let component: BomSubmitComponent;
  let fixture: ComponentFixture<BomSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
