import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { valideteService } from '../validete/validete.service';
import { ClientDTO } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    private Prisma: PrismaService,
    private validate: valideteService,
  ) {}

  async createClient(ip: ClientDTO) {
    const clientExists = await this.Prisma.client.findFirst({
      where: {
        ip: String(ip),
      },
    });

    if (clientExists) {
      return {
        token: clientExists.id,
      };
    }

    const client = await this.Prisma.client.create({
      data: {
        request_caunt: 0,
        ip: String(ip),
      },
    });

    return {
      token: client.id,
    };
  }

  async recoveryClientInfos(ip: ClientDTO) {
    const clientExists = await this.Prisma.client.findFirst({
      where: {
        ip: String(ip),
      },
    });

    if (!clientExists) throw new BadRequestException('Client não existe!');

    const clientInfosInstancias = await this.Prisma.clientInstancia.findMany({
      where: {
        client: {
          ip: String(ip),
        },
      },
    });

    const instanciaInfos = await Promise.all(
      clientInfosInstancias.map(async (item) => {
        const instancia = await this.Prisma.instanciaEntity.findMany({
          where: {
            id_instancia: item.id_instancia,
          },
          include: {
            entity: true,
            instancia: {
              select: {
                InstanciaName: true,
              },
            },
          },
        });
        return instancia;
      }),
    );

    const intanciaInfosDate = await Promise.all(
      instanciaInfos.map((i) => {
        const obj = {
          InstanciaName: '',
          entitys: [],
        };
        i.map((item) => {
          obj.InstanciaName = item.instancia.InstanciaName;
          obj.entitys.push(item.entity);
        });
        return obj;
      }),
    );

    return {
      clientInfo: clientExists,
      intanciaInfosDate,
    };
  }
}
