import {
  forestCityKey,
  ForestCityOfficeService
} from './forest-city/forest-city.service';
import { kwKey, KWOfficeService } from './kw/kw.service';
import {
  hammerSquadKey,
  HammerSquadOfficeService
} from './hammer-squad/hammer-squad.service';

export const ForestCityOfficeProvider = {
  provider: ForestCityOfficeService,
  key: forestCityKey
};

export const KWOfficeProvider = {
  provider: KWOfficeService,
  key: kwKey
};

export const HammerSquadOfficeProvider = {
  provider: HammerSquadOfficeService,
  key: hammerSquadKey
};

export type Offices =
  | typeof forestCityKey
  | typeof kwKey
  | typeof hammerSquadKey;

/**
 * All supported office keys in the application
 */
export const offices: Offices[] = [forestCityKey, kwKey, hammerSquadKey];

const OfficeProviders = [
  ForestCityOfficeProvider,
  KWOfficeProvider,
  HammerSquadOfficeProvider
];

export default OfficeProviders;
