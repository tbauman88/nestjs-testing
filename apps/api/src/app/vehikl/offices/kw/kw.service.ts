import { Injectable } from '@nestjs/common';
import {
  ExpectedTeamMemberShape,
  OfficeService
} from '../OfficeService.interface';
import { Office } from '../../../decorators/Office.decorator';

export const kwKey = 'kw';
export const kwValue: ExpectedTeamMemberShape[] = [
  {
    name: 'Alex Barry',
    office: kwKey
  }
];

interface RawKW {
  firstName: string;
  lastName: string;
  strengthOfBeard: number;
}

export const rawKWValue: RawKW[] = [
  {
    firstName: 'Alex',
    lastName: 'Barry',
    strengthOfBeard: 85
  }
];

@Office(kwKey)
@Injectable()
export class KWOfficeService implements OfficeService {
  private loadMembers() {
    return rawKWValue;
  }

  private mapToExpected(data: RawKW[]): ExpectedTeamMemberShape[] {
    return data.map(raw => ({
      name: `${raw.firstName} ${raw.lastName}`,
      office: kwKey
    }));
  }

  public getVehikls() {
    const raw = this.loadMembers();
    return this.mapToExpected(raw);
  }
}
