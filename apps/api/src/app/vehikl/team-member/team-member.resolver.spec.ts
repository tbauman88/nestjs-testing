import { Test, TestingModule } from '@nestjs/testing';
import { TeamMemberResolver } from './team-member.resolver';

describe('TeamMemberResolver', () => {
  let resolver: TeamMemberResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamMemberResolver],
    }).compile();

    resolver = module.get<TeamMemberResolver>(TeamMemberResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
