import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CustomerService } from './customer.service';
import { CustomerCreateDTO } from './dto/customerCreate.dto';
import { CustomerFindDTO } from './dto/customerFind.dto';

@ApiTags('customer')
@Controller('api/v1/customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiParam({
    name: 'ip',
    description:
      'O IP address sera fornecido automaticamente atraves de nossa plataforma, utilizado para criar um novo cliente temporario em nosso Banco De Dados.',
    example: '127.0.0.1',
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
    },
  })
  @Get('new/:IP')
  async createCustomer(@Param('IP') ip: CustomerCreateDTO) {
    return this.CustomerService.createCustomer(ip);
  }

  @ApiOperation({ summary: 'Obter infos do cliente' })
  @ApiParam({
    name: 'Token',
    description:
      'O Token fornecido é utilizado para listar as informaçoes do cliente e todas as intancias em que o token esta atrelado.',
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string' },
        requests: { type: 'number' },
        instances: { type: 'list' },
      },
    },
  })
  @Get('my/:TOKEN')
  async recoveryCustomerInfos(@Param('TOKEN') token: CustomerFindDTO) {
    return this.CustomerService.recoveryCustomerInfos(token);
  }
}
