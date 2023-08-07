import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      providers: [ThemeService],
    });
    fixture = TestBed.createComponent(AboutMeComponent);
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

    const home = fixture.nativeElement.querySelector('.about-me-wrapper');

    expect(component.isDarkTheme$).toBeTruthy();
    expect(home.classList.contains('dark')).toBeTruthy();
  });
});
