import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async requestIncrement(id: string) {
    const client = await this.client.findFirst({
      where: {
        id,
      },
    });

    if (client.request_caunt >= 101) {
      return client.request_caunt;
    } else {
      const clientUpdate = await this.client.update({
        data: {
          request_caunt: client.request_caunt + 1,
        },
        where: {
          id,
        },
      });
      return clientUpdate.request_caunt;
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
