import { Test, TestingModule } from '@nestjs/testing';
import { HammerSquadMakeService } from './hammer-squad-make.service';

describe('HammerSquadMakeService', () => {
  let service: HammerSquadMakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HammerSquadMakeService],
    }).compile();

    service = module.get<HammerSquadMakeService>(HammerSquadMakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
