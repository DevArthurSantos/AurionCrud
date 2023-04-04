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
    await this.Verification.CustomerVerificationToken(token, { BadRequest: true, });
    await this.Verification.requestsVerification(token.token)

    const customer = await this.Prisma.customer.findFirst({
      where: {
        token: String(token)
      }
    })

    const customerInstances = await this.Prisma.customerInstances.findMany({
      where: {
        customer_token: String(token)
      },
      include: {
        instance: true
      }
    })

    const instances = customerInstances.map(item => {
      return { id: item.instance.id, instanceName: item.instance.instance_name }
    })


    return {
      token,
      requests: customer.requests,
      instances
    };
  }
}
