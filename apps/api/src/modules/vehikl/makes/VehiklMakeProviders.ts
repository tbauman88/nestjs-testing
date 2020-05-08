import {
  forestCityKey,
  ForestCityMakeService,
} from "./forest-city/forest-city-make.service";
import { kwKey, KWMakeService } from "./kw/kw-make.service";

export const ForestCityMakeProvider = {
  provider: ForestCityMakeService,
  key: forestCityKey,
};

export const KWMakeProvider = {
  provider: KWMakeService,
  key: kwKey,
};

export type Makes = typeof forestCityKey | typeof kwKey;

/**
 * All supported make keys in the application
 */
export const makes: Makes[] = [forestCityKey, kwKey];

const VehiklProviders = [ForestCityMakeProvider, KWMakeProvider];

export default VehiklProviders;
