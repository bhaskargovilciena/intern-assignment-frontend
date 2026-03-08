import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelf } from './add-shelf';

describe('AddShelf', () => {
  let component: AddShelf;
  let fixture: ComponentFixture<AddShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddShelf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
