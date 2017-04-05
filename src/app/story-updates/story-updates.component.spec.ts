import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUpdatesComponent } from './story-updates.component';

describe('StoryUpdatesComponent', () => {
  let component: StoryUpdatesComponent;
  let fixture: ComponentFixture<StoryUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
