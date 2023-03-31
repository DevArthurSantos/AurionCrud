import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { InstanceController } from './instance.controller';
import { InstanceService } from './instance.service';

@Module({
  controllers: [InstanceController],
  providers: [InstanceService, PrismaService],
})
export class InstanciaModule {}
