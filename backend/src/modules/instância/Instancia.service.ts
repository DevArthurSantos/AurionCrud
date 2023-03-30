import { BadRequestException, Injectable } from '@nestjs/common';
import { InstanciaDTO } from './dto/instancia.dto';
import { PrismaService } from '../database/prisma.service';
import { valideteService } from '../validete/validete.service';
import { HttpCode } from '@nestjs/common/decorators';

@Injectable()
export class InstanciaService {
  constructor(
    private Prisma: PrismaService,
    private validete: valideteService,
  ) {}

  async createInstancia(data: InstanciaDTO) {
    await this.validete.valideteRequest({ clientToken: data.clientToken });

    const { instanciaName } = data;
    const { clientExists } = await this.validete.valideteClient(data);

    const { instanciaExists } = await this.validete.valideteInstancia(data);
    if (instanciaExists) {
      throw new BadRequestException('instancias ja existente!');
    }

    const instancia = await this.Prisma.clientInstancia.create({
      data: {
        instancia: {
          create: {
            InstanciaName: `${instanciaName}<T>${data.clientToken}`,
          },
        },
        client: {
          connect: {
            id: clientExists.id,
          },
        },
      },
    });

    return HttpCode(201);
  }

  async shaveInstancia(data: InstanciaDTO) {
    const requests = await this.validete.valideteRequest({
      clientToken: data.clientToken,
    });

    const { instanciaExists } = await this.validete.valideteInstancia(data);

    const Entitys = await this.Prisma.instanciaEntity.findMany({
      where: {
        id_instancia: instanciaExists.id,
      },
      include: {
        entity: true,
      },
    });

    const entitysList = [];

    Entitys.forEach((entity) => {
      entitysList.push(entity.entity);
    });

    return {
      instancia: instanciaExists.InstanciaName.split('<T>')[0],
      requests,
      entitysList,
    };
  }
}
