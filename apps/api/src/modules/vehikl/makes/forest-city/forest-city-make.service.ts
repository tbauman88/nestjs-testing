import { Injectable } from "@nestjs/common";
import {
  VehiklMakeService,
  ExpectedTeamMemberShape,
} from "../VehiklMakeService.interface";

export const forestCityKey = "forest-city";
export const forestCityValue: ExpectedTeamMemberShape[] = [
  {
    name: "Jesse Carter",
    office: forestCityKey,
  },
];

interface RawForestCity {
  firstName: string;
  lastName: string;
  goodAtPingPong: boolean;
}

export const rawForestCityValue: RawForestCity[] = [
  {
    firstName: "Jesse",
    lastName: "Carter",
    goodAtPingPong: false,
  },
];

@Injectable()
export class ForestCityMakeService implements VehiklMakeService {
  private loadMembers() {
    return rawForestCityValue;
  }

  private maptoExpected(data: RawForestCity[]): ExpectedTeamMemberShape[] {
    return data.map((raw) => ({
      name: `${raw.firstName} ${raw.lastName}`,
      office: forestCityKey,
    }));
  }

  public getVehikls() {
    const raw = this.loadMembers();

    return this.maptoExpected(raw);
  }
}
