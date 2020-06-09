import { Test, TestingModule } from '@nestjs/testing';
import { VehiklController } from './vehikl.controller';
import { VehiklService } from './vehikl.service';
import { UnprocessableEntityException } from '@nestjs/common';
import { offices, Offices } from './offices/Offices.fixture';
import { TeamMember, Office } from './team-member/TeamMember';

const vehiklServiceMock = jest.genMockFromModule<VehiklService>(
  './vehikl.service'
);

const sampleExpectedMembers = (office: Office): TeamMember[] => [
  {
    name: 'test',
    office: office,
    favouriteColour: 'cornflowerblue',
    id: 'test',
    playsPingpong: false
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

    vehiklServiceMock.getVehikls = jest.fn((office: Office) =>
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
    expect(() => controller.getVehikls('six' as Office)).toThrow(
      UnprocessableEntityException
    );

    expect(vehiklServiceMock.getVehikls).not.toBeCalled();
  });

  it.each(Object.keys(Office).map(k => Office[k]))(
    'should pass when office is supported %p',
    office => {
      expect(controller.getVehikls(office)).toEqual(
        sampleExpectedMembers(office)
      );
      expect(vehiklServiceMock.getVehikls).toBeCalledTimes(1);
    }
  );
});
