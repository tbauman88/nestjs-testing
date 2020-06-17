import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  forestCityKey,
  forestCityValue
} from './offices/forest-city/forest-city.service';
import { kwKey, kwValue } from './offices/kw/kw.service';
import { VehiklModule } from './vehikl.module';
import { VehiklService } from './vehikl.service';
import {
  hammerSquadKey,
  hammerSquadValue
} from './offices/hammer-squad/hammer-squad.service';

const VEHIKL_VALUES: { [key: string]: any } = {
  [kwKey]: kwValue,
  [forestCityKey]: forestCityValue,
  [hammerSquadKey]: hammerSquadValue
};

const GET_VEHIKLS_CASES = [kwKey, forestCityKey, hammerSquadKey];

describe('VehiklService', () => {
  let service: VehiklService;
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [VehiklModule]
    }).compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get<VehiklService>(VehiklService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`should resolve the kw service when requesting with ${kwKey}`, () => {
    expect(service.getVehikls(kwKey)).toEqual(kwValue);
  });

  it(`should resolve the forest-city service when requesting with ${forestCityKey}`, () => {
    expect(service.getVehikls(forestCityKey)).toEqual(forestCityValue);
  });

  it.each(GET_VEHIKLS_CASES)(`should resolve the %s service`, (key: string) => {
    expect(service.getVehikls(key)).toEqual(VEHIKL_VALUES[key]);
  });

  afterAll(async () => {
    await app.close();
  });
});
