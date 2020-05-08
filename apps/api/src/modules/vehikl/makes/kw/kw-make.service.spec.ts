import { Test, TestingModule } from '@nestjs/testing';
import { KWMakeService } from './kw-make.service';

describe('KWMakeService', () => {
  let service: KWMakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KWMakeService]
    }).compile();

    service = module.get<KWMakeService>(KWMakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
