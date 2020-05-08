import { Test, TestingModule } from '@nestjs/testing';
import { ForestCityMakeService } from './forest-city-make.service';

describe('ForestCityMakeService', () => {
  let service: ForestCityMakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForestCityMakeService],
    }).compile();

    service = module.get<ForestCityMakeService>(ForestCityMakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
