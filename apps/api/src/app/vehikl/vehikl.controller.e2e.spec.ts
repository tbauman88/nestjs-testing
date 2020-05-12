import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { VehiklModule } from './vehikl.module';
import {
  forestCityKey,
  forestCityValue
} from './offices/forest-city/forest-city.service';
import { kwKey, kwValue } from './offices/kw/kw.service';
import {
  hammerSquadKey,
  hammerSquadValue
} from './offices/hammer-squad/hammer-squad.service';
import { UnknownOfficeError } from './vehikl.controller';

const vehiklProviderScenarios = [
  {
    key: forestCityKey,
    value: forestCityValue
  },
  {
    key: kwKey,
    value: kwValue
  },
  {
    key: hammerSquadKey,
    value: hammerSquadValue
  }
];

const unknownProviderKey = 'unknownDude';
const UnprocessableEntityErrorExpect = (office: string) => ({
  statusCode: 422,
  error: 'Unprocessable Entity',
  message: UnknownOfficeError(office)
});

describe('Vehikl', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [VehiklModule]
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
