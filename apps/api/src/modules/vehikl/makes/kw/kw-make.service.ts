import { Injectable } from '@nestjs/common';
import {
  ExpectedTeamMemberShape,
  VehiklMakeService
} from '../VehiklMakeService.interface';

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

@Injectable()
export class KWMakeService implements VehiklMakeService {
  private loadMembers() {
    return rawKWValue;
  }

  private mapToExpected(data: RawKW[]): ExpectedTeamMemberShape[] {
    return data.map((raw) => ({
      name: `${raw.firstName} ${raw.lastName}`,
      office: kwKey
    }));
  }

  public getVehikls() {
    const raw = this.loadMembers();
    return this.mapToExpected(raw);
  }
}