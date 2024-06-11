import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlamourComponent } from './glamour.component';

describe('GlamourComponent', () => {
  let component: GlamourComponent;
  let fixture: ComponentFixture<GlamourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlamourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlamourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
