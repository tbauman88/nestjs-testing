import { TeamMember } from '../team-member/TeamMember';

export interface OfficeService {
  getVehikls: () => TeamMember[];
  getTeamMember: (id: string) => Promise<TeamMember>;
}
