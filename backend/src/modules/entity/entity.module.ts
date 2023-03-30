import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';

@Module({
  controllers: [EntityController],
  providers: [EntityService, PrismaService],
})
export class EntityModule {}
