import {
  Controller,
  Get,
  Param,
  UnprocessableEntityException
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam
} from '@nestjs/swagger';
import { Offices, offices } from './offices/Offices.fixture';
import { Office, TeamMember } from './team-member/TeamMember';
import { VehiklService } from './vehikl.service';

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
  @ApiParam({
    name: 'office',
    type: () => Office,
    example: 'forest-city',
    enum: Object.keys(Office).map(k => Office[k])
  })
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
