import { Test, TestingModule } from '@nestjs/testing';
import { SealsService } from './seals.service';

describe('SealsService', () => {
  let service: SealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SealsService],
    }).compile();

    service = module.get<SealsService>(SealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
