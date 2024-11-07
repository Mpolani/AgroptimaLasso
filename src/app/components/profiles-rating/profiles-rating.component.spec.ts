import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesRatingComponent } from './profiles-rating.component';

describe('ProfilesRatingComponent', () => {
  let component: ProfilesRatingComponent;
  let fixture: ComponentFixture<ProfilesRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
