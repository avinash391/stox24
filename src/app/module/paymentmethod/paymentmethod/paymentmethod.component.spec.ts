import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDeposite } from './paymentmethod.component';


describe('PaymentDeposite', () => {
  let component: PaymentDeposite;
  let fixture: ComponentFixture<PaymentDeposite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDeposite ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDeposite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
