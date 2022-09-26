import { TestBed } from '@angular/core/testing';

import { NodeConnectionServiceService } from './node-connection-service.service';

describe('NodeConnectionServiceService', () => {
  let service: NodeConnectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeConnectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
