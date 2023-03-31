import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InstanceDTO } from './dto/instance.dto';
import { InstanceCreateDTO } from './dto/instanceCreate.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InstanceService } from './instance.service';

@ApiTags('instance')
@Controller('api/v1/instance')
export class InstanceController {
  constructor(private readonly InstanceService: InstanceService) {}

  @ApiOperation({ summary: 'Utilizado para criar uma nova instancia' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        instance_id: { type: 'string' },
        customer_token: { type: 'string' },
      },
    },
  })
  @Get(':token/new/:instanceName')
  async createInstance(@Param() instance: InstanceCreateDTO) {
    return this.InstanceService.createInstance(instance);
  }

  @ApiOperation({
    summary: 'Utilizado para listar todos os fragmetos de uma instancia',
  })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        intanceID: { type: 'string' },
        createdAt: { type: 'string' },
        data: { type: 'object' },
      },
    },
  })
  @Get(':token/scrape/:instanceName')
  async scrapeInstance(@Param() instance: InstanceDTO) {
    return this.InstanceService.scrapeInstance(instance);
  }

  @ApiOperation({ summary: 'Utilizado para deletar uma instancia' })
  @ApiParam({
    name: 'instanceName',
    example: 'Pessoas',
  })
  @ApiParam({
    name: 'Token',
    example: '44ec4abd-be80-4028-865b-c41e2e475015',
  })
  @ApiResponse({
    status: 200,
  })
  @Delete(':token/erase/:instanceName')
  async eraseInstance(@Param() instance: InstanceDTO) {
    return this.InstanceService.eraseInstance(instance);
  }
}
