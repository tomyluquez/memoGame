import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectlengthComponent } from './selectlength.component';

describe('SelectlengthComponent', () => {
  let component: SelectlengthComponent;
  let fixture: ComponentFixture<SelectlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectlengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
