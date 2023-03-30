import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ValidateDTO } from './dto/validate.dto';

@Injectable()
export class valideteService {
  constructor(private Prisma: PrismaService) {}

  async valideteClient(data: ValidateDTO) {
    const { clientToken } = data;

    const clientExists = await this.Prisma.client.findFirst({
      where: {
        id: clientToken,
      },
    });

    if (!clientExists) {
      throw new BadRequestException('Token invalido ou não existente!');
    }

    return { clientExists };
  }
  async valideteRequest(data: ValidateDTO) {
    const requests = await this.Prisma.requestIncrement(data.clientToken);

    if (requests === 101) {
      throw new BadRequestException('Limite de requests atingido!');
      return;
    }

    return requests;
  }
  async valideteInstancia(data: ValidateDTO) {
    const { instanciaName, clientToken } = data;

    if (!instanciaName) {
      throw new BadRequestException('instanciaName é obrigatorio!');
    }

    const instanciaExists = await this.Prisma.instancia.findFirst({
      where: {
        InstanciaName: `${instanciaName}<T>${clientToken}`,
      },
    });

    return { instanciaExists };
  }
  async valideteEntity(data: ValidateDTO) {
    const { entityID } = data;

    const entityExists = await this.Prisma.entity.findUnique({
      where: {
        id: entityID,
      },
    });

    if (!entityExists) {
      throw new BadRequestException('Entity invalida ou não existente!');
    }
    return { entityExists };
  }
}
