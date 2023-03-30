import { Module } from '@nestjs/common';
import { ClientController } from './modules/client/client.controller';
import { ClientService } from './modules/client/client.service';
import { PrismaService } from './modules/database/prisma.service';
import { EntityController } from './modules/entity/entity.controller';
import { EntityService } from './modules/entity/entity.service';
import { InstanciaController } from './modules/instância/Instancia.controller';
import { InstanciaService } from './modules/instância/instancia.service';
import { valideteService } from './modules/validete/validete.service';

@Module({
  imports: [],
  controllers: [ClientController, InstanciaController, EntityController],
  providers: [
    PrismaService,
    ClientService,
    InstanciaService,
    EntityService,
    valideteService,
  ],
})
export class AppModule {}
