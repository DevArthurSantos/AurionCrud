import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService],
})
export class ResourceModule {}
