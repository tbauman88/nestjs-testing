import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "./app.module";

describe("Apps", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET root`, () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect({
        message: "Welcome to api!",
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
