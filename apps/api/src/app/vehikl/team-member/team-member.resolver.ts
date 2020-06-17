import { Query, Resolver, Args } from '@nestjs/graphql';
import { TeamMember, Office } from './TeamMember';
import { Offices } from '../offices/Offices.fixture';
import { VehiklService } from '../vehikl.service';

@Resolver(of => TeamMember)
export class TeamMemberResolver {
  constructor(private readonly vehiklService: VehiklService) {}

  @Query(returns => TeamMember)
  async TeamMemberById(
    @Args('office', {
      type: () => Office
    })
    office: Office,
    @Args('id') id: string
  ): Promise<TeamMember> {
    return await this.vehiklService.getTeamMemberById(office, id);
  }
}
