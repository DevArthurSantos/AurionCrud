import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { InstanciaController } from './instancia.controller';
import { InstanciaService } from './instancia.service';

@Module({
  controllers: [InstanciaController],
  providers: [InstanciaService, PrismaService],
})
export class InstanciaModule {}
