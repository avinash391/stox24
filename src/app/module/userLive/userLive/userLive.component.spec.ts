import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLiveComponent } from './userLive.component';

describe('UserLiveComponent', () => {
  let component: UserLiveComponent;
  let fixture: ComponentFixture<UserLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed for your component

  // Example test case for checking if an element is present
  it('should render a welcome message', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Live User Page');
  });
});
