import { Injectable } from '@nestjs/common';
import {
  OfficeService,
  ExpectedTeamMemberShape
} from '../OfficeService.interface';
import { Office } from '../../../decorators/Office.decorator';

export const hammerSquadKey = 'hammer-squad';
export const hammerSquadValue: ExpectedTeamMemberShape[] = [
  {
    name: 'Brian',
    office: hammerSquadKey
  }
];

interface RawHammerSquad {
  employee: string;
  weight: number;
  wellFormed: boolean;
}

export const rawHammerSquadValue: RawHammerSquad[] = [
  {
    employee: 'Brian',
    weight: 100,
    wellFormed: false
  }
];

@Office(hammerSquadKey)
@Injectable()
export class HammerSquadOfficeService implements OfficeService {
  private fetchVehikls() {
    return rawHammerSquadValue;
  }

  private mapToExpected(data: RawHammerSquad[]): ExpectedTeamMemberShape[] {
    return data.map(raw => ({
      name: raw.employee,
      office: hammerSquadKey
    }));
  }

  public getVehikls() {
    const raw = this.fetchVehikls();

    return this.mapToExpected(raw);
  }
}
