import {
  Controller,
  Get,
  Param,
  UnprocessableEntityException
} from '@nestjs/common';
import { VehiklService } from './vehikl.service';
import { Offices, offices } from './offices/Offices.fixture';

export const UnknownOfficeError = (office: string) =>
  `Unknown office ${office}`;

@Controller('vehikl')
export class VehiklController {
  constructor(private readonly vehiklService: VehiklService) {}

  @Get(':office')
  getVehikls(@Param('office') office: Offices) {
    if (offices.indexOf(office) < 0) {
      throw new UnprocessableEntityException(UnknownOfficeError(office));
    }
    return this.vehiklService.getVehikls(office);
  }
}
