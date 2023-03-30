import { Controller, Get, Param } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CustomerService } from './customer.service';
import { CustomerCreateDTO } from './dto/customerCreate.dto';
import { CustomerFindDTO } from './dto/customerFind.dto';

@Controller('api/v1/customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @Get('new/:IP')
  async createCustomer(@Param('IP') ip: CustomerCreateDTO) {
    return this.CustomerService.createCustomer(ip);
  }
  @Get('my/:TOKEN')
  async recoveryCustomerInfos(@Param('TOKEN') token: CustomerFindDTO) {
    return this.CustomerService.recoveryCustomerInfos(token);
  }
}
