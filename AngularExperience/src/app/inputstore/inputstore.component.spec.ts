import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputstoreComponent } from './inputstore.component';

describe('InputstoreComponent', () => {
  let component: InputstoreComponent;
  let fixture: ComponentFixture<InputstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
