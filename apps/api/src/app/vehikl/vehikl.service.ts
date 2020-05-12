import { Injectable } from '@nestjs/common';
import { OfficeServiceFactory } from './offices/OfficeService.factory';

@Injectable()
export class VehiklService {
  constructor(private readonly officeServiceFactory: OfficeServiceFactory) {}

  getVehikls(office: string) {
    return this.officeServiceFactory.getOffice(office).getVehikls();
  }
}
