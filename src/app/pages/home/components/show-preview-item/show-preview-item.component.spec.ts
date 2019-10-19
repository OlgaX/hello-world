import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowPreviewItemComponent} from './show-preview-item.component';

describe('ShowPreviewItemComponent', () => {
  let component: ShowPreviewItemComponent;
  let fixture: ComponentFixture<ShowPreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPreviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
