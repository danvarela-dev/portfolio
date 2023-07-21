import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { take } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { CmsModule } from '../../cms.module';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
      imports: [CmsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load default theme on init', () => {
    expect(component.isDarkTheme$).toBeTruthy();
  });

  it('should apply dark class when dark theme is enabled', () => {
    const navbar = fixture.nativeElement.querySelector('.top-navbar');

    const toggle = fixture.nativeElement.querySelector('.toggle');

    toggle.click();

    component.isDarkTheme$.pipe(take(1)).subscribe(() => {
      fixture.detectChanges();
      expect(navbar.querySelector('.dark')).toBeTruthy();
    });
  });
});
