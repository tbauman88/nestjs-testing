import { Injectable } from '@nestjs/common';
import { OfficeService } from '../OfficeService.interface';
import { Office } from '../../../decorators/Office.decorator';
import {
  TeamMember,
  Office as OfficeLocation
} from '../../team-member/TeamMember';

export const kwKey = 'kw';
export const kwValue: TeamMember[] = [
  {
    id: '420',
    name: 'Alex Barry',
    office: OfficeLocation.KW,
    favouriteColour: 'yellow',
    playsPingpong: false
  }
];

interface RawKW {
  id: number;
  firstName: string;
  lastName: string;
  strengthOfBeard: number;
  playsPingPong: boolean;
}

export const rawKWValue: RawKW[] = [
  {
    id: 420,
    firstName: 'Alex',
    lastName: 'Barry',
    strengthOfBeard: 85,
    playsPingPong: false
  }
];

@Office(kwKey)
@Injectable()
export class KWOfficeService implements OfficeService {
  private loadMembers() {
    return rawKWValue;
  }

  private mapToExpected(data: RawKW): TeamMember {
    if (!data) {
      throw new Error('Data is undefined');
    }
    return {
      name: `${data.firstName} ${data.lastName}`,
      id: `${data.id}`,
      office: OfficeLocation.KW,
      favouriteColour: data.strengthOfBeard > 10 ? 'yellow' : 'pink',
      playsPingpong: data.playsPingPong
    };
  }

  public getVehikls() {
    const raw = this.loadMembers();
    return raw.map(this.mapToExpected);
  }

  public async getTeamMember(id: string) {
    return this.mapToExpected(
      rawKWValue.find(member => member.id === parseInt(id))
    );
  }
}
