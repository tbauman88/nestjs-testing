import {
  Controller,
  Get,
  Param,
  UnprocessableEntityException,
  HttpStatus,
  NotFoundException
} from '@nestjs/common';
import { VehiklService } from './vehikl.service';
import { Offices, offices } from './offices/Offices.fixture';
import {
  ApiResponse,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam
} from '@nestjs/swagger';
import { TeamMember, Office } from './team-member/TeamMember';

export const UnknownOfficeError = (office: string) =>
  `Unknown office ${office}`;

@Controller('vehikl')
export class VehiklController {
  constructor(private readonly vehiklService: VehiklService) {}

  @Get(':office')
  @ApiOperation({
    summary: 'Retrieve all team members for a given office',
    tags: ['vehikl']
  })
  @ApiParam({ name: 'office', type: () => Office })
  @ApiOkResponse({
    description: 'Valid Office key provided and returning team members',
    type: [TeamMember]
  })
  @ApiNotFoundResponse({
    description: 'The office key provided was not valid'
  })
  getVehikls(@Param('office') office: Offices) {
    if (offices.indexOf(office) < 0) {
      throw new UnprocessableEntityException(UnknownOfficeError(office));
    }
    return this.vehiklService.getVehikls(office);
  }
}
