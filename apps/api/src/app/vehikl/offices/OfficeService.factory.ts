import { Injectable } from '@nestjs/common';
import { OfficeFactory } from '../../decorators/OfficeFactory.decorator';
import { OfficeService } from './OfficeService.interface';

@OfficeFactory()
@Injectable()
export class OfficeServiceFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getOffice(office: string): OfficeService {
    return null as OfficeService; // This will be overridden at runtime
  }
}
