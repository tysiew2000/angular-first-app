import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSuggestionComponent } from './section-suggestion.component';

describe('SectionSuggestionComponent', () => {
  let component: SectionSuggestionComponent;
  let fixture: ComponentFixture<SectionSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
