import { Injectable } from "@nestjs/common";
import { VehiklMakeService } from "../VehiklMakeService.interface";

export const forestCityKey = "forest-city";
export const forestCityValue = [`Forest city  y'all`];
@Injectable()
export class ForestCityMakeService implements VehiklMakeService {
  public getVehikls() {
    return forestCityValue;
  }
}
