import { Test, TestingModule } from '@nestjs/testing';
import { SealsController } from './seals.controller';
import { SealsService } from './seals.service';

describe('SealsController', () => {
  let controller: SealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SealsController],
      providers: [SealsService],
    }).compile();

    controller = module.get<SealsController>(SealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
