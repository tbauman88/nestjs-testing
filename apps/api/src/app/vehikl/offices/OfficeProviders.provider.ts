import { Provider } from '@nestjs/common';
import OfficeProviders from './OfficeProviders';
import { OfficeService } from './OfficeService.interface';

const createOfficeService = (key: string, service): Provider<OfficeService> => {
  return {
    provide: key,
    useFactory: () => {
      return new service();
    }
  };
};

export const createOfficeServiceProviders = () => {
  return OfficeProviders.map(({ key, provider }) =>
    createOfficeService(key, provider)
  );
};
