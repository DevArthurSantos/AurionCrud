import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { valideteService } from './validete.service';

@Module({
  controllers: [],
  providers: [valideteService, PrismaService],
})
export class InstanciaModule {}
