import { Injectable } from '@nestjs/common';
import { OfficeService } from '../OfficeService.interface';
import { Office } from '../../../decorators/Office.decorator';
import {
  TeamMember,
  Office as OfficeLocation
} from '../../team-member/TeamMember';

export const forestCityKey = 'forest-city';
export const forestCityValue: TeamMember[] = [
  {
    id: 'ping',
    name: 'Jesse Carter',
    office: OfficeLocation.FC,
    favouriteColour: null,
    playsPingpong: true
  }
];

interface RawForestCity {
  id: string;
  firstName: string;
  lastName: string;
  goodAtPingPong: boolean;
}

export const rawForestCityValue: RawForestCity[] = [
  {
    id: 'ping',
    firstName: 'Jesse',
    lastName: 'Carter',
    goodAtPingPong: false
  }
];

@Office(forestCityKey)
@Injectable()
export class ForestCityOfficeService implements OfficeService {
  private loadMembers() {
    return rawForestCityValue;
  }

  private maptoExpected(data: RawForestCity): TeamMember {
    return {
      id: data.id,
      name: `${data.firstName} ${data.lastName}`,
      office: OfficeLocation.FC,
      favouriteColour: null,
      playsPingpong: data.goodAtPingPong != null
    };
  }

  public getVehikls() {
    const raw = this.loadMembers();

    return raw.map(this.maptoExpected);
  }

  public async getTeamMember(id: string) {
    return this.maptoExpected(
      rawForestCityValue.find(member => member.id === id)
    );
  }
}
