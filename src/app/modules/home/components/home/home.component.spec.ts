import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { of } from 'rxjs';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ThemeService],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ThemeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply dark theme', () => {
    service.toggleTheme();
    component.ngOnInit();

    fixture.detectChanges();

    const home = fixture.nativeElement.querySelector('.home');

    expect(component.isDarkTheme$).toBeTruthy();
    expect(home.classList.contains('dark')).toBeTruthy();
  });
});
