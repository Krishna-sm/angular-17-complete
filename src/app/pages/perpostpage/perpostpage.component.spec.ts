import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpostpageComponent } from './perpostpage.component';

describe('PerpostpageComponent', () => {
  let component: PerpostpageComponent;
  let fixture: ComponentFixture<PerpostpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerpostpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerpostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
