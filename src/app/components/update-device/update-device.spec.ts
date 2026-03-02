import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDevice } from './update-device';

describe('UpdateDevice', () => {
  let component: UpdateDevice;
  let fixture: ComponentFixture<UpdateDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDevice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDevice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
