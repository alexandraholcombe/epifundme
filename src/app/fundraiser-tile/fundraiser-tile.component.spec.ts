import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserTileComponent } from './fundraiser-tile.component';

describe('FundraiserTileComponent', () => {
  let component: FundraiserTileComponent;
  let fixture: ComponentFixture<FundraiserTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
