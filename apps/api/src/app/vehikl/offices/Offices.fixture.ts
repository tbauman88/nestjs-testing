import { forestCityKey } from './forest-city/forest-city.service';
import { kwKey } from './kw/kw.service';
import { hammerSquadKey } from './hammer-squad/hammer-squad.service';

export type Offices =
  | typeof forestCityKey
  | typeof kwKey
  | typeof hammerSquadKey;

/**
 * All supported office keys in the application
 */
export const offices: Offices[] = [forestCityKey, kwKey, hammerSquadKey];
