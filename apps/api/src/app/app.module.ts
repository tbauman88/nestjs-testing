import { Module } from '@nestjs/common';
import { VehiklModule } from './vehikl/vehikl.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // resolvers: { JSON: GraphQLJSON },
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: false
    }),
    VehiklModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
