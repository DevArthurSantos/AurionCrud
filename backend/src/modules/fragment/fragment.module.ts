import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { FragmentController } from './fragment.controller';
import { FragmentService } from './fragment.service';

@Module({
  controllers: [FragmentController],
  providers: [FragmentService, PrismaService],
})
export class EntityModule {}
