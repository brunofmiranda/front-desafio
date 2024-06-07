import { TestBed } from '@angular/core/testing';

import { RelacionamentosService } from './relacionamentos.service';

describe('RelacionametosService', () => {
  let service: RelacionamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelacionamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
