import { TestBed } from '@angular/core/testing';

import { CodeFormService } from './code-form.service';

describe('CodeFormService', () => {
  let service: CodeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
