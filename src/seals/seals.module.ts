import { Module } from '@nestjs/common';
import { SealsService } from './seals.service';
import { SealsController } from './seals.controller';
import { DatabaseModule } from 'src/database/database.module';
import { sealsProviders } from './seals.providers';
  

@Module({
  imports: [DatabaseModule],
  controllers: [SealsController],
  providers: [SealsService,
  ...sealsProviders]
})
export class SealsModule {}
