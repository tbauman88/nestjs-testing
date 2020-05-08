import { DynamicModule, Module } from '@nestjs/common';
import { createOfficeServiceProviders } from './offices/OfficeProviders.provider';
import { VehiklController } from './vehikl.controller';
import { VehiklService } from './vehikl.service';

@Module({
  controllers: [VehiklController],
  providers: [VehiklService]
})
export class VehiklModule {
  static forRoot(): DynamicModule {
    const vehiklOfficeProviders = createOfficeServiceProviders();

    return {
      module: VehiklModule,
      controllers: [VehiklController],
      providers: [VehiklService, ...vehiklOfficeProviders],
      exports: [...vehiklOfficeProviders]
    };
  }
}
