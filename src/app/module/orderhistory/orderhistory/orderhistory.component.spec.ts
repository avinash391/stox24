import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { SalariesDetails } from './salaries.component';
import { OrderHistory } from './orderhistory.component';

describe('OrderHistory', () => {
  let component: OrderHistory;
  let fixture: ComponentFixture<OrderHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistory ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
