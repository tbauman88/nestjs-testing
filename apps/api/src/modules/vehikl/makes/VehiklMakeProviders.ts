import {
  forestCityKey,
  ForestCityMakeService,
} from './forest-city/forest-city-make.service';
import { kwKey, KWMakeService } from './kw/kw-make.service';
import {
  hammerSquadKey,
  HammerSquadMakeService,
} from './hammer-squad/hammer-squad-make.service';

export const ForestCityMakeProvider = {
  provider: ForestCityMakeService,
  key: forestCityKey,
};

export const KWMakeProvider = {
  provider: KWMakeService,
  key: kwKey,
};

export const HammerSquadMakeProvider = {
  provider: HammerSquadMakeService,
  key: hammerSquadKey,
};

export type Makes = typeof forestCityKey | typeof kwKey | typeof hammerSquadKey;

/**
 * All supported make keys in the application
 */
export const makes: Makes[] = [forestCityKey, kwKey, hammerSquadKey];

const VehiklProviders = [
  ForestCityMakeProvider,
  KWMakeProvider,
  HammerSquadMakeProvider,
];

export default VehiklProviders;
