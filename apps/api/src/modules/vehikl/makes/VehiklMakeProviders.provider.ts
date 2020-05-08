import { Provider } from "@nestjs/common";
import VehiklProviders from "./VehiklMakeProviders";
import { VehiklMakeService } from "./VehiklMakeService.interface";

const createVehiklMakeService = (
  key: string,
  service
): Provider<VehiklMakeService> => {
  return {
    provide: key,
    useFactory: () => {
      return new service();
    },
  };
};

export const createVehiklMakeServiceProviders = () => {
  return VehiklProviders.map(({ key, provider }) =>
    createVehiklMakeService(key, provider)
  );
};
