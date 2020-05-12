import { Module } from '@nestjs/common';
import { VehiklModule } from './vehikl/vehikl.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [VehiklModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
