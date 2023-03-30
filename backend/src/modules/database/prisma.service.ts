import {
  INestApplication,
  Injectable,
  OnModuleInit,
  BadRequestException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async requestIncrement(id: string) {
    const customer = await this.customer.findFirst({
      where: {
        id,
      },
    });

    if (customer.requests === 100) {
      throw new BadRequestException(
        `O Cliente atingiu o numero de "${customer.requests}" solicitações!`,
      );
    }

    const customerUpdate = await this.customer.update({
      data: {
        requests: customer.requests + 1,
      },
      where: {
        id,
      },
    });
    return customerUpdate.requests;
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
