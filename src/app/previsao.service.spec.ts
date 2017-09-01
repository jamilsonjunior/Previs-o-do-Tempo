import { TestBed, inject } from '@angular/core/testing';

import { PrevisaoService } from './previsao.service';

describe('PrevisaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevisaoService]
    });
  });

  it('should be created', inject([PrevisaoService], (service: PrevisaoService) => {
    expect(service).toBeTruthy();
  }));
});
