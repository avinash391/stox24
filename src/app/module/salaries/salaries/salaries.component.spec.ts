import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalariesDetails } from './salaries.component';

describe('SalariesDetails', () => {
  let component: SalariesDetails;
  let fixture: ComponentFixture<SalariesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalariesDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalariesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
