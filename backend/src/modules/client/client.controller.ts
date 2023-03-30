import { Controller, Get, Param } from '@nestjs/common';
import { ClientDTO } from './dto/client.dto';
import { ClientService } from './client.service';

@Controller('api/v1/client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Get('new/:IP')
  async createClient(@Param('IP') ip: ClientDTO) {
    return this.ClientService.createClient(ip);
  }
  @Get('my/:IP')
  async recoveryClientInfos(@Param('IP') ip: ClientDTO) {
    return this.ClientService.recoveryClientInfos(ip);
  }
}
