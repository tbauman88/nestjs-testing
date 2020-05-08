import { Test, TestingModule } from '@nestjs/testing';
import { VehiklController } from './vehikl.controller';
import { VehiklService } from './vehikl.service';
import { UnprocessableEntityException } from '@nestjs/common';
import { offices, Offices } from './offices/OfficeProviders';

const vehiklServiceMock = jest.genMockFromModule<VehiklService>(
  './vehikl.service'
);

const sampleExpectedMembers = (office: Offices) => [
  {
    name: 'test',
    office: office
  }
];

describe('Vehikl Controller', () => {
  let controller: VehiklController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiklController],
      providers: [VehiklService]
    })
      .overrideProvider(VehiklService)
      .useValue(vehiklServiceMock)
      .compile();

    controller = module.get<VehiklController>(VehiklController);

    vehiklServiceMock.getVehikls = jest.fn((office: Offices) =>
      sampleExpectedMembers(office)
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shouldnt invoke getVehikls when office is not supported', () => {
    expect(() => controller.getVehikls('six' as Offices)).toThrow(
      UnprocessableEntityException
    );

    expect(vehiklServiceMock.getVehikls).not.toBeCalled();
  });

  it.each(offices)('should pass when office is supported %p', office => {
    expect(controller.getVehikls(office)).toEqual(
      sampleExpectedMembers(office)
    );
    expect(vehiklServiceMock.getVehikls).toBeCalledTimes(1);
  });
});
