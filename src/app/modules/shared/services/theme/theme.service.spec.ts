import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { take } from 'rxjs';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ThemeService] });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle theme', () => {
    service.toggleTheme();
    service.theme.pipe(take(1)).subscribe((isDarkTheme) => {
      expect(isDarkTheme).toBe(true);
    });
  });

  it('should return theme', () => {
    service.theme.pipe(take(1)).subscribe((isDarkTheme) => {
      expect(isDarkTheme).toBe(false);
    });
  });
});
