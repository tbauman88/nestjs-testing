import { DynamicModule, Module } from "@nestjs/common";
import { createVehiklMakeServiceProviders } from "./makes/VehiklMakeProviders.provider";
import { VehiklController } from "./vehikl.controller";
import { VehiklService } from "./vehikl.service";

@Module({
  controllers: [VehiklController],
  providers: [VehiklService],
})
export class VehiklModule {
  static forRoot(): DynamicModule {
    const vehiklMakeProviders = createVehiklMakeServiceProviders();

    return {
      module: VehiklModule,
      controllers: [VehiklController],
      providers: [VehiklService, ...vehiklMakeProviders],
      exports: [...vehiklMakeProviders],
    };
  }
}
