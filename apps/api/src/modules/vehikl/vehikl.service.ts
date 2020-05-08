import { Injectable } from "@nestjs/common";
import { VehiklMakeService } from "./makes/VehiklMakeService.interface";
import { ModuleRef } from "@nestjs/core";

@Injectable()
export class VehiklService {
  constructor(private readonly moduleRef: ModuleRef) {}

  getVehikls(make: string) {
    const service = this.moduleRef.get<VehiklMakeService>(make);
    return service.getVehikls();
  }
}
