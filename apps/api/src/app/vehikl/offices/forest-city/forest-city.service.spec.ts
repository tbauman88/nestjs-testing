import { Test, TestingModule } from '@nestjs/testing';
import { ForestCityOfficeService } from './forest-city.service';

describe('ForestCityOfficeService', () => {
  let service: ForestCityOfficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForestCityOfficeService]
    }).compile();

    service = module.get<ForestCityOfficeService>(ForestCityOfficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
