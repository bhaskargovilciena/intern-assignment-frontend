import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfPositions } from './shelf-positions';

describe('ShelfPositions', () => {
  let component: ShelfPositions;
  let fixture: ComponentFixture<ShelfPositions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfPositions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfPositions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
