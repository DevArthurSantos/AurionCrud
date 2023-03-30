import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { InstanceController } from './Instance.controller';
import { InstanceService } from './Instance.service';

@Module({
  controllers: [InstanceController],
  providers: [InstanceService, PrismaService],
})
export class InstanciaModule {}
