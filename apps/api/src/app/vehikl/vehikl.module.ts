import { Module, OnModuleInit } from '@nestjs/common';
import { ForestCityOfficeService } from './offices/forest-city/forest-city.service';
import { HammerSquadOfficeService } from './offices/hammer-squad/hammer-squad.service';
import { KWOfficeService } from './offices/kw/kw.service';
import { VehiklController } from './vehikl.controller';
import { VehiklService } from './vehikl.service';
import { OFFICE } from '../decorators/Office.decorator';
import { DiscoveryModule, DiscoveryService } from '@golevelup/nestjs-discovery';
import { OfficeServiceFactory } from './offices/OfficeService.factory';
import { OFFICE_FACTORY } from '../decorators/OfficeFactory.decorator';
import { OfficeService } from './offices/OfficeService.interface';
import { TeamMemberResolver } from './team-member/team-member.resolver';

@Module({
  imports: [DiscoveryModule],
  controllers: [VehiklController],
  providers: [
    OfficeServiceFactory,
    VehiklService,
    ForestCityOfficeService,
    KWOfficeService,
    HammerSquadOfficeService,
    TeamMemberResolver
  ],
  exports: [VehiklService]
})
export class VehiklModule implements OnModuleInit {
  constructor(private readonly discover: DiscoveryService) {}

  async onModuleInit() {
    const officeProviders = await this.discover.providersWithMetaAtKey<string>(
      OFFICE
    );
    const [factory] = (
      await this.discover.providersWithMetaAtKey(OFFICE_FACTORY)
    ).map(x => x.discoveredClass.instance);

    if (!factory || !(factory instanceof OfficeServiceFactory)) {
      throw new Error(`Unresolvable Office Service Factory`);
    }

    factory.getOffice = (key: string) =>
      officeProviders.find(x => x.meta === key).discoveredClass
        .instance as OfficeService;
  }
}
