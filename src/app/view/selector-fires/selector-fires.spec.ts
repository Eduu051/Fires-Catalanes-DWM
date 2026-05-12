import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFires } from './selector-fires';

describe('SelectorFires', () => {
  let component: SelectorFires;
  let fixture: ComponentFixture<SelectorFires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorFires],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorFires);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
