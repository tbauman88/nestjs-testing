import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import {
  forestCityKey,
  forestCityValue,
} from "./makes/forest-city/forest-city-make.service";
import { kwKey, kwValue } from "./makes/kw/kw-make.service";
import { VehiklModule } from "./vehikl.module";
import { VehiklService } from "./vehikl.service";

describe("VehiklService", () => {
  let service: VehiklService;
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [VehiklModule.forRoot()],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get<VehiklService>(VehiklService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it(`should resolve the kw service when requesting with ${kwKey}`, () => {
    expect(service.getVehikls(kwKey)).toEqual(kwValue);
  });

  it(`should resolve the forest-city service when requesting with ${forestCityKey}`, () => {
    expect(service.getVehikls(forestCityKey)).toEqual(forestCityValue);
  });

  afterAll(async () => {
    await app.close();
  });
});
