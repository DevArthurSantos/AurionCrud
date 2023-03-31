/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
import { InstanceDTO } from './dto/instance.dto';
import { InstanceCreateDTO } from './dto/instanceCreate.dto';
import { InstanceShaveDTO } from './dto/InstanceShave.dto';

@Injectable()
export class InstanceService {
  constructor(
    private Prisma: PrismaService,
    private Verification: VerificationService,
  ) {}

  async createInstance(instance: InstanceCreateDTO) {
    await this.Verification.InstanceVerification(instance, {
      BadRequest: true,
      ExistsOrNoExist: 'existing',
    });

    const newInstace = await this.Prisma.customerInstances.create({
      data: {
        instance: {
          create: {
            instance_name: instance.instanceName,
          },
        },
        customer: {
          connect: {
            token: instance.token,
          },
        },
      },
    });

    return newInstace;
  }

  async scrapeInstance(instance: InstanceDTO) {
    const instanceFind = await this.Verification.InstanceVerification(
      instance,
      { BadRequest: true, ExistsOrNoExist: 'not-existing' },
    );
    
    const instanceScrape = await this.Prisma.instanceFragments.findMany({
      where:{ 
        instance: {
          id: instanceFind.id
        }
      },
      select: {
        fragment: true
      }
    })

    const res = instanceScrape.map((instance) => {
      return {
        intanceID: instance.fragment.id,
        createdAt: instance.fragment.createdAt,
        data: JSON.parse(instance.fragment.data)
      }
    })

    return res
  }

  async eraseInstance(instance: InstanceShaveDTO) {
    const eraseInstance = await this.Verification.InstanceVerification(
      instance,
      { BadRequest: true, ExistsOrNoExist: 'not-existing' },
    );

    await this.Prisma.instance.delete({
      where: {
        id: eraseInstance.id,
      },
    });
  }
}
