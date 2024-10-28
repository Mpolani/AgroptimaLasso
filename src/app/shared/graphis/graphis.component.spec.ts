import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphisComponent } from './graphis.component';

describe('GraphisComponent', () => {
  let component: GraphisComponent;
  let fixture: ComponentFixture<GraphisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
