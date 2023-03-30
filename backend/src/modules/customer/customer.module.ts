import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CustomerController } from './Customer.controller';
import { CustomerService } from './Customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService],
})
export class ResourceModule {}
