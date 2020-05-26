import { Injectable } from '@nestjs/common';
import { OfficeServiceFactory } from './offices/OfficeService.factory';
import { TeamMember } from './team-member/TeamMember';
import { Offices } from './offices/Offices.fixture';

@Injectable()
export class VehiklService {
  constructor(private readonly officeServiceFactory: OfficeServiceFactory) {}

  getVehikls(office: string) {
    return this.officeServiceFactory.getOffice(office).getVehikls();
  }

  async getTeamMemberById(office: Offices, id: string): Promise<TeamMember> {
    return await this.officeServiceFactory.getOffice(office).getTeamMember(id);
  }
}
