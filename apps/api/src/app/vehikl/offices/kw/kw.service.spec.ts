import { Test, TestingModule } from '@nestjs/testing';
import { KWOfficeService } from './kw.service';

describe('KWOfficeService', () => {
  let service: KWOfficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KWOfficeService]
    }).compile();

    service = module.get<KWOfficeService>(KWOfficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
