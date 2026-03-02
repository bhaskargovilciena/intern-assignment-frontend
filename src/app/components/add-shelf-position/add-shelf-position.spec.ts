import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfPosition } from './add-shelf-position';

describe('AddShelfPosition', () => {
  let component: AddShelfPosition;
  let fixture: ComponentFixture<AddShelfPosition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddShelfPosition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelfPosition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
