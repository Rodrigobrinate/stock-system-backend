import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { brandProviders } from './brand.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BrandController],
  providers: [BrandService,
  ...brandProviders]
})
export class BrandModule {}
