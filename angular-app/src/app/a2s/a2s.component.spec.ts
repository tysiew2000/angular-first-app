import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2sComponent } from './a2s.component';

describe('A2sComponent', () => {
  let component: A2sComponent;
  let fixture: ComponentFixture<A2sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2sComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(A2sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
