import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesAppComponent } from './phases-app.component';

describe('PhasesAppComponent', () => {
  let component: PhasesAppComponent;
  let fixture: ComponentFixture<PhasesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhasesAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhasesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
