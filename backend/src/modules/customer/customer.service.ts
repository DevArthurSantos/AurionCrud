/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
import { CustomerCreateDTO } from './dto/customerCreate.dto';
import { CustomerFindDTO } from './dto/customerFind.dto';

@Injectable()
export class CustomerService {
  constructor(
    private Prisma: PrismaService,
    private Verification: VerificationService,
  ) { }

  async createCustomer(ip: CustomerCreateDTO) {

    let customer = await this.Verification.CustomerVerificationIP(ip, { BadRequest: false });

    if (!customer) {
      customer = await this.Prisma.customer.create({
        data: {
          ip: String(ip),
        },
      });
    }

    return {
      token: customer.token,
    };
  }

  async recoveryCustomerInfos(token: CustomerFindDTO) {
    const customer = await this.Verification.CustomerVerificationToken(token, {
      BadRequest: true,
    });

    return { token: customer.token, requests: customer.requests };
  }
}
