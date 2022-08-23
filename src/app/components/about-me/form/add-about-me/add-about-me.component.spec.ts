import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAboutMeComponent } from './add-about-me.component';

describe('AddAboutMeComponent', () => {
  let component: AddAboutMeComponent;
  let fixture: ComponentFixture<AddAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
