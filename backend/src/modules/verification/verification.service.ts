/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CustomerVerificationDTO } from './dto/customerVerification.dto';
import { FragmentVerificationDTO } from './dto/fragmentVerification.dto';
import { InstanceVerificationDTO } from './dto/instanceVerification.dto';
import { VerificationDTO } from './dto/verification.dto';

@Injectable()
export class VerificationService {
  constructor(private Prisma: PrismaService) {}

  async CustomerVerificationIP(
    customer: CustomerVerificationDTO,
    { BadRequest }: VerificationDTO,
  ) {
    const customerExists = await this.Prisma.customer.findFirst({
      where: {
        ip: String(customer),
      },
    });

    if (BadRequest && !customerExists) {
      throw new BadRequestException('O cliente não existe!');
    }

    return customerExists;
  }

  async CustomerVerificationToken(
    customer: CustomerVerificationDTO,
    BadRequest: VerificationDTO,
  ) {
    
    const customerExists = await this.Prisma.customer.findFirst({
      where: {
        token: String(customer.token || customer ),
      },
    });

    if (BadRequest && !customerExists) {
      throw new BadRequestException('O cliente não existe!');
    }

    return customerExists;
  }

  async InstanceVerification(instance: InstanceVerificationDTO, { BadRequest, ExistsOrNoExist }: VerificationDTO) {
    
    const customer = await this.CustomerVerificationToken({ token: instance.token }, { BadRequest: true });
   
    const instanceExists = await this.Prisma.instance.findMany({
      where: {
        instance_name: instance.instanceName,
      },
    });

    if (BadRequest && ExistsOrNoExist === 'not-existing' && instanceExists.length === 0) {
      throw new BadRequestException('instancias não existente!');
    }

    instanceExists.map(async (instance) => {
      const verificationInstanceExists =
        await this.Prisma.customerInstances.findFirst({
          where: {
            customer_token: customer.token,
            instance_id: instance.id,
          },
        });

      if (
        BadRequest &&
        ExistsOrNoExist === 'existing' &&
        verificationInstanceExists
      ) {
        throw new BadRequestException('instancias ja existente!');
      }
    });

    return instanceExists[0];
  }

  async FragmentVerification( fragment: FragmentVerificationDTO, { BadRequest }: VerificationDTO ) {

    const customer = await this.InstanceVerification(fragment, { BadRequest: true, ExistsOrNoExist: 'not-existing' });;

    const fragmentExists = await this.Prisma.fragment.findFirst({
      where: {
        id: fragment.fragmentID,
      },
    });

    if (BadRequest && !fragmentExists) {
      throw new BadRequestException('O fragmento não existe!');
    }

    return fragmentExists;
  }
}
