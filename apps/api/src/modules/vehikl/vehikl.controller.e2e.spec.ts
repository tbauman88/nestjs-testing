import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { VehiklModule } from './vehikl.module';
import {
  forestCityKey,
  forestCityValue,
} from './makes/forest-city/forest-city-make.service';
import { kwKey, kwValue } from './makes/kw/kw-make.service';
import {
  hammerSquadKey,
  hammerSquadValue,
} from './makes/hammer-squad/hammer-squad-make.service';
import { UnknownMakeError } from './vehikl.controller';

const vehiklProviderScenarios = [
  {
    key: forestCityKey,
    value: forestCityValue,
  },
  {
    key: kwKey,
    value: kwValue,
  },
  {
    key: hammerSquadKey,
    value: hammerSquadValue,
  },
];

const unknownProviderKey = 'unknownDude';
const UnprocessableEntityErrorExpect = (make: string) => ({
  statusCode: 422,
  error: 'Unprocessable Entity',
  message: UnknownMakeError(make),
});

describe('Vehikl', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [VehiklModule.forRoot()],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe(`getVehikls for the various providers`, () => {
    vehiklProviderScenarios.map(({ key, value }) => {
      it(`/GET /vehikl/${key}`, () => {
        return request(app.getHttpServer())
          .get(`/vehikl/${key}`)
          .expect(200)
          .expect(value);
      });
    });

    it(`/GET /vehikl/unknown throws a 422 for an unknown provider key: ${unknownProviderKey}`, () => {
      return request(app.getHttpServer())
        .get(`/vehikl/${unknownProviderKey}`)
        .expect(422)
        .expect(UnprocessableEntityErrorExpect(unknownProviderKey));
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
