import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { take } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CmsModule } from '../../cms.module';

describe('ToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CmsModule],
      providers: [ThemeService],
    });
    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value of isDarkTheme$ when toggle is clicked', () => {
    const toggleElement = fixture.nativeElement.querySelector('.toggle');
    component.isDarkTheme$.pipe(take(1)).subscribe((isDarkTheme) => {
      expect(isDarkTheme).toBe(false);
    });
    toggleElement.click();

    fixture.detectChanges();
    component.isDarkTheme$.pipe(take(1)).subscribe((isDarkTheme) => {
      expect(isDarkTheme).toBe(true);
    });
  });

  it('should change state of animation when toggle is clicked', () => {
    const toggleElement = fixture.nativeElement.querySelector('.toggle');

    component.isDarkTheme$.pipe(take(1)).subscribe(() => {
      expect(component.animationState).toBe(0);
    });

    toggleElement.click();

    component.isDarkTheme$.pipe(take(1)).subscribe(() => {
      expect(component.animationState).toBe(-1);
    });

    toggleElement.click();

    component.isDarkTheme$.pipe(take(1)).subscribe(() => {
      expect(component.animationState).toBe(1);
    });
  });
});
