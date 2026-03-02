import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShelf } from './update-shelf';

describe('UpdateShelf', () => {
  let component: UpdateShelf;
  let fixture: ComponentFixture<UpdateShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateShelf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShelf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
