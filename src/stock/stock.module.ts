import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { stockProviders } from './stock.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [StockService,
  ...stockProviders]
})
export class StockModule {}
