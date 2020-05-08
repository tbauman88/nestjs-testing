import { Injectable } from '@nestjs/common';
import { VehiklMakeService } from '../VehiklMakeService.interface';

export const hammerSquadKey = 'hammer-squad';
export const hammerSquadValue = [`holy crap brian is loud`];
@Injectable()
export class HammerSquadMakeService implements VehiklMakeService {
  public getVehikls() {
    return hammerSquadValue;
  }
}
