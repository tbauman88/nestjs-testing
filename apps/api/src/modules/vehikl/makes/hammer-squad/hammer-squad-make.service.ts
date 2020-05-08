import { Injectable } from "@nestjs/common";
import {
  VehiklMakeService,
  ExpectedTeamMemberShape,
} from "../VehiklMakeService.interface";

export const hammerSquadKey = "hammer-squad";
export const hammerSquadValue: ExpectedTeamMemberShape[] = [
  {
    name: "Brian",
    office: hammerSquadKey,
  },
];

interface RawHammerSquad {
  employee: string;
  weight: number;
  wellFormed: boolean;
}

export const rawHammerSquadValue: RawHammerSquad[] = [
  {
    employee: "Brian",
    weight: 100,
    wellFormed: false,
  },
];
@Injectable()
export class HammerSquadMakeService implements VehiklMakeService {
  private fetchVehikls() {
    return rawHammerSquadValue;
  }

  private mapToExpected(data: RawHammerSquad[]): ExpectedTeamMemberShape[] {
    return data.map((raw) => ({
      name: raw.employee,
      office: hammerSquadKey,
    }));
  }

  public getVehikls() {
    const raw = this.fetchVehikls();

    return this.mapToExpected(raw);
  }
}
