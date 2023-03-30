import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from '../verification/verification.service';
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

  async eraseInstance(instance: InstanceShaveDTO) {
    const eraseInstance = await this.Verification.InstanceVerification(
      instance,
      { BadRequest: true, ExistsOrNoExist: 'not-existing' },
    );

    await this.Prisma.instance.delete({
      where: {
        id: eraseInstance[0].id,
      },
    });
  }
}
