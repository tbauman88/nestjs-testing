import { Test, TestingModule } from "@nestjs/testing";
import { VehiklController } from "./vehikl.controller";
import { VehiklService } from "./vehikl.service";
import { UnprocessableEntityException } from "@nestjs/common";
import { makes } from "./makes/VehiklMakeProviders";

const vehiklServiceMock = jest.genMockFromModule<VehiklService>(
  "./vehikl.service"
);

describe("Vehikl Controller", () => {
  let controller: VehiklController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiklController],
      providers: [VehiklService],
    })
      .overrideProvider(VehiklService)
      .useValue(vehiklServiceMock)
      .compile();

    controller = module.get<VehiklController>(VehiklController);

    vehiklServiceMock.getVehikls = jest.fn((make: string) => [make]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("shouldnt invoke getVehikls when office is not supported", () => {
    expect(() => controller.getVehikls("six" as any)).toThrow(
      UnprocessableEntityException
    );

    expect(vehiklServiceMock.getVehikls).not.toBeCalled();
  });

  it.each(makes)("should pass when office is supported %p", (make) => {
    expect(controller.getVehikls(make)).toEqual([make]);
    expect(vehiklServiceMock.getVehikls).toBeCalledTimes(1);
  });
});
