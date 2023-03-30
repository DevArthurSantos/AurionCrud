import { BadRequestException, HttpCode, Injectable } from '@nestjs/common';
import { EntityDTO } from './dto/entity.dto';
import { PrismaService } from '../database/prisma.service';
import { valideteService } from '../validete/validete.service';

@Injectable()
export class EntityService {
  constructor(
    private Prisma: PrismaService,
    private validete: valideteService,
  ) {}

  async createEntity(
    clientToken: string,
    instanciaName: string,
    data: EntityDTO,
  ) {
    await this.validete.valideteRequest({ clientToken });
    const { clientExists } = await this.validete.valideteClient({
      clientToken,
    });
    const { instanciaExists } = await this.validete.valideteInstancia({
      instanciaName,
    });

    const entity = await this.Prisma.instanciaEntity.create({
      data: {
        entity: {
          create: {
            entityValue: data.entityValue,
          },
        },
        instancia: {
          connect: {
            InstanciaName: instanciaExists.InstanciaName,
          },
        },
      },
    });

    return entity;
  }
  async updateEntity(
    clientToken: string,
    instanciaName: string,
    data: EntityDTO,
  ) {
    await this.validete.valideteRequest({ clientToken });
    const { clientExists } = await this.validete.valideteClient({
      clientToken,
    });
    const { instanciaExists } = await this.validete.valideteInstancia({
      instanciaName,
    });
    const { entityExists } = await this.validete.valideteEntity({
      entityID: data.id,
    });

    await this.Prisma.entity.update({
      data: {
        entityValue: data.newValue,
      },
      where: {
        id: data.id,
      },
    });
  }
  async findEntity(
    clientToken: string,
    instanciaName: string,
    data: EntityDTO,
  ) {
    await this.validete.valideteRequest({ clientToken });
    const { clientExists } = await this.validete.valideteClient({
      clientToken,
    });
    const { instanciaExists } = await this.validete.valideteInstancia({
      instanciaName,
    });
    const { entityExists } = await this.validete.valideteEntity({
      entityID: data.id,
    });

    return entityExists;
  }

  async deleteEntity(
    clientToken: string,
    instanciaName: string,
    data: EntityDTO,
  ) {
    await this.validete.valideteRequest({ clientToken });
    const { clientExists } = await this.validete.valideteClient({
      clientToken,
    });
    const { instanciaExists } = await this.validete.valideteInstancia({
      instanciaName,
    });
    const { entityExists } = await this.validete.valideteEntity({
      entityID: data.id,
    });

    const delEntity = await this.Prisma.entity.delete({
      where: {
        id: data.id,
      },
    });

    return;
  }
}
