import { Injectable } from '@nestjs/common';
import { OfficeService } from './offices/OfficeService.interface';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class VehiklService {
  constructor(private readonly moduleRef: ModuleRef) {}

  getVehikls(office: string) {
    const service = this.moduleRef.get<OfficeService>(office);
    return service.getVehikls();
  }
}
