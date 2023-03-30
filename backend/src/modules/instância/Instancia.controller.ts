import { Controller, Get, Param } from '@nestjs/common';
import { InstanciaDTO } from './dto/instancia.dto';
import { InstanciaService } from './instancia.service';

@Controller('api/v1/instancia')
export class InstanciaController {
  constructor(private readonly InstanciaService: InstanciaService) {}

  @Get(':clientToken/new/:instanciaName')
  async createInstancia(@Param() data: InstanciaDTO) {
    return this.InstanciaService.createInstancia(data);
  }

  @Get(':clientToken/shave/:instanciaName')
  async shaveInstancia(@Param() data: InstanciaDTO) {
    return this.InstanciaService.shaveInstancia(data);
  }
}
