import { Test, TestingModule } from '@nestjs/testing';
import { TeamMemberResolver } from './team-member.resolver';
import { VehiklModule } from '../vehikl.module';

describe('TeamMemberResolver', () => {
  let resolver: TeamMemberResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [VehiklModule],
      providers: [TeamMemberResolver]
    }).compile();

    resolver = module.get<TeamMemberResolver>(TeamMemberResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
