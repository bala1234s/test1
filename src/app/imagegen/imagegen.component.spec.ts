import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegenComponent } from './imagegen.component';

describe('ImagegenComponent', () => {
  let component: ImagegenComponent;
  let fixture: ComponentFixture<ImagegenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagegenComponent]
    });
    fixture = TestBed.createComponent(ImagegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
