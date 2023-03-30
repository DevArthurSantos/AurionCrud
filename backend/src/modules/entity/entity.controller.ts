import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Get,
} from '@nestjs/common';
import { EntityDTO } from './dto/entity.dto';
import { EntityService } from './entity.service';

@Controller('api/v1/entity')
export class EntityController {
  constructor(private readonly EntityService: EntityService) {}

  @Post(':clientToken/new/:instanciaName')
  async createEntity(
    @Param('clientToken') clientToken: string,
    @Param('instanciaName') instanciaName: string,
    @Body() data: EntityDTO,
  ) {
    return this.EntityService.createEntity(clientToken, instanciaName, data);
  }

  @Put(':clientToken/modify/:instanciaName')
  async updateEntity(
    @Param('clientToken') clientToken: string,
    @Param('instanciaName') instanciaName: string,
    @Body() data: EntityDTO,
  ) {
    return this.EntityService.updateEntity(clientToken, instanciaName, data);
  }

  @Delete(':clientToken/erase/:instanciaName')
  async deleteEntity(
    @Param('clientToken') clientToken: string,
    @Param('instanciaName') instanciaName: string,
    @Body() data: EntityDTO,
  ) {
    return this.EntityService.deleteEntity(clientToken, instanciaName, data);
  }
  @Post(':clientToken/find/:instanciaName')
  async findEntity(
    @Param('clientToken') clientToken: string,
    @Param('instanciaName') instanciaName: string,
    @Body() data: EntityDTO,
  ) {
    return this.EntityService.findEntity(clientToken, instanciaName, data);
  }
}
