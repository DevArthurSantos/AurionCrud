import { Controller, Get, Delete, Param } from '@nestjs/common';
import { InstanceDTO } from './dto/instance.dto';
import { InstanceCreateDTO } from './dto/instanceCreate.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InstanceService } from './instance.service';

@Controller('api/v1/instance')
export class InstanceController {
  constructor(private readonly InstanceService: InstanceService) {}

  @Get(':token/new/:instanceName')
  async createInstance(@Param() instance: InstanceDTO) {
    return this.InstanceService.createInstance(instance);
  }
  @Get(':token/scrape/:instanceName')
  async scrapeInstance(@Param() instance: InstanceDTO) {
    return this.InstanceService.scrapeInstance(instance);
  }
  @Delete(':token/erase/:instanceName')
  async eraseInstance(@Param() instance: InstanceDTO) {
    return this.InstanceService.eraseInstance(instance);
  }
}
