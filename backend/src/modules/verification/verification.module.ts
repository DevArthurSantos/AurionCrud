import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VerificationService } from './verification.service';

@Module({
  controllers: [],
  providers: [VerificationService, PrismaService],
})
export class InstanciaModule {}
