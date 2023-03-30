import { Module } from '@nestjs/common';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerService } from './modules/customer/customer.service';
import { PrismaService } from './modules/database/prisma.service';
import { VerificationService } from './modules/verification/verification.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [PrismaService, CustomerService, VerificationService],
})
export class AppModule {}
