import { Injectable } from "@nestjs/common";
import { VehiklMakeService } from "../VehiklMakeService.interface";

export const kwKey = "kw";
export const kwValue = [`kw y'all coding professionals!`];
@Injectable()
export class KWMakeService implements VehiklMakeService {
  public getVehikls() {
    return kwValue;
  }
}
