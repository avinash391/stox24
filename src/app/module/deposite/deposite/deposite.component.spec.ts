import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BankDetailComponent } from './bank-detail.component';
import { DepositeDetails } from './deposite.component';

describe('DepositeDetails', () => {
  let component: DepositeDetails;
  let fixture: ComponentFixture<DepositeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
