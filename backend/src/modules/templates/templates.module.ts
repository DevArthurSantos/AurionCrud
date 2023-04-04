import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { TemplateController } from './templates.controller';
import { TemplateService } from './templates.service';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService, PrismaService],
})
export class InstanciaModule {}
