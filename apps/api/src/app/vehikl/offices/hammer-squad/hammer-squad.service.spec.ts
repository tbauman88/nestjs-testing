import { Test, TestingModule } from '@nestjs/testing';
import { HammerSquadOfficeService } from './hammer-squad.service';

describe('HammerSquadOfficeService', () => {
  let service: HammerSquadOfficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HammerSquadOfficeService]
    }).compile();

    service = module.get<HammerSquadOfficeService>(HammerSquadOfficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
