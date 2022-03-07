import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { SealsModule } from './seals/seals.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandModule } from './brand/brand.module';
import { ClientsModule } from './clients/clients.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';

@Module({
  imports: [StockModule, SealsModule, UsersModule, CategoriesModule, BrandModule, ClientsModule, FornecedoresModule,  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
