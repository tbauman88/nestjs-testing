import {
  Controller,
  Get,
  Param,
  UnprocessableEntityException,
} from "@nestjs/common";
import { VehiklService } from "./vehikl.service";
import { Makes, makes } from "./makes/VehiklMakeProviders";

export const UnknownMakeError = (make: string) => `Unknown make ${make}`;

@Controller("vehikl")
export class VehiklController {
  constructor(private readonly vehiklService: VehiklService) {}

  @Get(":make")
  getVehikls(@Param("make") make: Makes) {
    if (makes.indexOf(make) < 0) {
      throw new UnprocessableEntityException(UnknownMakeError(make));
    }
    return this.vehiklService.getVehikls(make);
  }
}
