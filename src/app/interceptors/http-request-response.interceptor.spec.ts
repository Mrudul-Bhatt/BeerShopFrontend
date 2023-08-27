import { TestBed } from '@angular/core/testing';

import { HttpRequestResponseInterceptor } from './http-request-response.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpRequestResponseInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpRequestResponseInterceptor = TestBed.inject(
      HttpRequestResponseInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
