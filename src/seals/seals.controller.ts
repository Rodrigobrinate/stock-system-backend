import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SealsService } from './seals.service';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';

@Controller('seals')
export class SealsController {
  constructor(private readonly sealsService: SealsService) {}

  @Post()
  create(@Body() createSealDto: CreateSealDto) {
    return this.sealsService.create(createSealDto);
  }

  @Get()
  findAll() {
    return this.sealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sealsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSealDto: UpdateSealDto) {
    return this.sealsService.update(id, updateSealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sealsService.remove(id);
  }
}
